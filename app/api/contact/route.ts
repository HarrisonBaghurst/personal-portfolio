import { Resend } from "resend";

import {
    escapeHtml,
    isDisposableEmail,
    stripHeaderInjection,
} from "@/lib/contact-email";
import { contactRequestSchema } from "@/lib/contact-schema";
import { contactGlobalLimit, contactIpLimit } from "@/lib/rate-limit";

const MIN_FILL_TIME_MS = 3_000;

const allowedOrigins = (request: Request) => {
    const origins = new Set<string>([new URL(request.url).origin]);

    if (process.env.NEXT_PUBLIC_SITE_URL) {
        origins.add(new URL(process.env.NEXT_PUBLIC_SITE_URL).origin);
    }

    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
        origins.add(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
    }

    if (process.env.VERCEL_URL) {
        origins.add(`https://${process.env.VERCEL_URL}`);
    }

    if (process.env.NODE_ENV !== "production") {
        origins.add("http://localhost:3000");
    }

    return origins;
};

const clientIp = (request: Request) => {
    const forwarded = request.headers.get("x-forwarded-for");

    return (
        forwarded?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown"
    );
};

const minutesUntil = (reset: number) =>
    Math.max(1, Math.ceil((reset - Date.now()) / 60_000));

export async function POST(request: Request) {
    const origin = request.headers.get("origin");

    if (!origin || !allowedOrigins(request).has(origin)) {
        return Response.json({ error: "Request rejected." }, { status: 403 });
    }

    let body: unknown;

    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    const parsed = contactRequestSchema.safeParse(body);

    if (!parsed.success) {
        return Response.json(
            { error: "Please check the form and try again." },
            { status: 400 },
        );
    }

    const { firstName, lastName, email, message, website, elapsedMs } =
        parsed.data;

    if (website || elapsedMs < MIN_FILL_TIME_MS) {
        return Response.json({ ok: true });
    }

    if (isDisposableEmail(email)) {
        return Response.json(
            { error: "Please use a permanent email address." },
            { status: 400 },
        );
    }

    const ipResult = await contactIpLimit().limit(clientIp(request));

    if (!ipResult.success) {
        return Response.json(
            {
                error: `You've sent too many messages. Try again in ${minutesUntil(ipResult.reset)} minutes.`,
            },
            { status: 429 },
        );
    }

    const globalResult = await contactGlobalLimit().limit("all");

    if (!globalResult.success) {
        return Response.json(
            {
                error: "The contact form is temporarily unavailable. Please email me directly.",
            },
            { status: 429 },
        );
    }

    const name = stripHeaderInjection(`${firstName} ${lastName}`);
    const from =
        process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";
    const to = process.env.CONTACT_EMAIL;

    if (!to) {
        return Response.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 },
        );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `Portfolio contact from ${name}`,
        text: `${name} <${email}>\n\n${message}`,
        html: `<p><strong>${escapeHtml(name)}</strong><br /><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    if (error) {
        return Response.json(
            { error: "Something went wrong. Please try again later." },
            { status: 502 },
        );
    }

    return Response.json({ ok: true });
}
