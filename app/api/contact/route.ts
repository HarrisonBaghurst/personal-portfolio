import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'anonymous';

    const { success, limit, remaining, reset } = await rateLimit.limit(ip);

    if(!success) {
        return NextResponse.json({ error: 'Too many request - Please try again later' }, { status: 429 }); 
    }

    const body = await request.json();
    const { email, message } = body; 

    if(email === '' || message === '') {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400});
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: '070806harrison@gmail.com',
            subject: `Email address: ${email}`,
            text: `${message}`,
        });
        return NextResponse.json({ success: true }, { status: 200 });
    }
    catch (e) {
        console.error('Email failed:', e);
        return NextResponse.json({ error: 'Email failed - Please try again' }, { status: 500 });
    }

}