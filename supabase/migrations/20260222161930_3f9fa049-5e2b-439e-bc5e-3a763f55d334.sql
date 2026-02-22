CREATE TABLE public.meeting_leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  preferred_time text,
  message text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.meeting_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.meeting_leads
  FOR INSERT TO anon WITH CHECK (true);