import { NextRequest, NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email?.trim()) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // Upsert — if email exists and was unsubscribed, reactivate it
    await sql`
      INSERT INTO newsletter_signups (email, source)
      VALUES (${email.trim().toLowerCase()}, 'website')
      ON CONFLICT (email) DO UPDATE SET
        is_active = true,
        unsubscribed_at = NULL,
        subscribed_at = NOW()
    `;

    return NextResponse.json({
      success: true,
      message: 'You have been subscribed to our newsletter!',
    }, { status: 201 });

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
