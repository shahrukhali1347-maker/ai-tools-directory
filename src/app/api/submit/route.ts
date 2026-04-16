import { NextRequest, NextResponse } from 'next/server';
import sql from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, website, tagline, description, category, pricing, email } = body;

    // Validation
    if (!name?.trim() || !website?.trim() || !tagline?.trim() || !description?.trim() || !category || !pricing || !email?.trim()) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    // Validate URL
    try {
      const url = new URL(website);
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
    } catch {
      return NextResponse.json({ error: 'Please provide a valid website URL.' }, { status: 400 });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    // Insert into database
    const result = await sql`
      INSERT INTO tool_submissions (tool_name, website_url, tagline, description, category, pricing, submitter_email)
      VALUES (${name.trim()}, ${website.trim()}, ${tagline.trim()}, ${description.trim()}, ${category}, ${pricing}, ${email.trim()})
      RETURNING id, created_at
    `;

    return NextResponse.json({
      success: true,
      message: 'Tool submitted successfully! We will review it within 2-3 business days.',
      id: result[0].id,
    }, { status: 201 });

  } catch (error) {
    console.error('Submit error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
