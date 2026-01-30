-- Create leads table for storing guide downloads and lead captures
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  lead_source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index for filtering by lead source
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(lead_source);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Only service role can insert/select (no public access)
CREATE POLICY "Service role can manage leads" ON leads
  FOR ALL
  USING (auth.role() = 'service_role');

-- Optional: Create a view for analytics
CREATE OR REPLACE VIEW lead_analytics AS
SELECT 
  lead_source,
  COUNT(*) as total_leads,
  DATE_TRUNC('day', created_at) as signup_date
FROM leads
GROUP BY lead_source, DATE_TRUNC('day', created_at)
ORDER BY signup_date DESC;
