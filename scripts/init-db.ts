import { neon } from '@neondatabase/serverless';

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_sUoDO4gI7tMl@ep-dry-resonance-anq0q9ll-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

async function initDb() {
  const sql = neon(DATABASE_URL);

  console.log('Creating tables...');

  // Tool submissions table
  await sql`
    CREATE TABLE IF NOT EXISTS tool_submissions (
      id SERIAL PRIMARY KEY,
      tool_name VARCHAR(255) NOT NULL,
      website_url VARCHAR(500) NOT NULL,
      tagline VARCHAR(100) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(50) NOT NULL,
      pricing VARCHAR(50) NOT NULL,
      submitter_email VARCHAR(255) NOT NULL,
      logo_filename VARCHAR(255),
      status VARCHAR(20) DEFAULT 'pending',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;
  console.log('✓ tool_submissions table created');

  // Newsletter signups table
  await sql`
    CREATE TABLE IF NOT EXISTS newsletter_signups (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      source VARCHAR(50) DEFAULT 'website',
      subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      unsubscribed_at TIMESTAMP WITH TIME ZONE,
      is_active BOOLEAN DEFAULT true
    )
  `;
  console.log('✓ newsletter_signups table created');

  // Contact submissions table
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(50) NOT NULL,
      message TEXT NOT NULL,
      status VARCHAR(20) DEFAULT 'new',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;
  console.log('✓ contact_submissions table created');

  console.log('\nAll tables created successfully!');
}

initDb().catch(console.error);
