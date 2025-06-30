import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
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
        return NextResponse.json({ error: 'Email failed' }, { status: 500 });
    }

}