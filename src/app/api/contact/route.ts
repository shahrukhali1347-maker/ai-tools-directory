import { NextRequest, NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    await sql`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (${name.trim()}, ${email.trim()}, ${subject}, ${message.trim()})
    `;

    return NextResponse.json({
      success: true,
      message: 'Message sent! We will get back to you within 24-48 hours.',
    }, { status: 201 });

  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
