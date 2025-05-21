-- Create waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  interests TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX waitlist_email_idx ON waitlist (email);

-- Create index on status for filtering
CREATE INDEX waitlist_status_idx ON waitlist (status);

-- Add a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
BEFORE UPDATE ON waitlist
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Add RLS (Row Level Security) policies
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Only allow authenticated users to read waitlist entries
CREATE POLICY "Allow authenticated users to read waitlist" 
ON waitlist FOR SELECT 
TO authenticated 
USING (true);

-- Allow anyone to insert into waitlist (for the public form)
CREATE POLICY "Allow public to insert into waitlist" 
ON waitlist FOR INSERT 
TO anon 
WITH CHECK (true);

-- Only allow service role to update or delete
CREATE POLICY "Allow service role to update waitlist" 
ON waitlist FOR UPDATE 
USING (auth.role() = 'service_role');

CREATE POLICY "Allow service role to delete from waitlist" 
ON waitlist FOR DELETE 
USING (auth.role() = 'service_role');
