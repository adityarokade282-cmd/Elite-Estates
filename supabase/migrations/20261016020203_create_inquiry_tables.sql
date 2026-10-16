/*
# Create inquiry tables for Elite Estates real estate website

1. New Tables
- `contact_inquiries`: Stores general contact form submissions from the Contact Us page.
  - id (uuid, primary key)
  - full_name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - property_type (text, nullable — user selects interest area)
  - message (text, not null)
  - created_at (timestamptz, default now())
- `property_inquiries`: Stores inquiries related to specific properties (Schedule a Visit, WhatsApp inquiry, etc.)
  - id (uuid, primary key)
  - property_id (text, not null — references the demo property slug)
  - property_name (text, not null)
  - full_name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - inquiry_type (text, not null — e.g. 'schedule_visit', 'whatsapp_inquiry', 'general')
  - message (text, nullable)
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- This is a no-auth, single-tenant public website. Anyone can submit inquiries.
- Allow anon + authenticated to INSERT (submit inquiries) and SELECT their own submissions.
- No UPDATE or DELETE from the frontend — inquiries are managed via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  property_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_inquiries;
CREATE POLICY "anon_insert_contact" ON contact_inquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS property_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id text NOT NULL,
  property_name text NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  inquiry_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE property_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_property_inquiry" ON property_inquiries;
CREATE POLICY "anon_insert_property_inquiry" ON property_inquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);
