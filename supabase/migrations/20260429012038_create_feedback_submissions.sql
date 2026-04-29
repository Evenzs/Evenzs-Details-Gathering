/*
  # Create feedback_submissions table

  1. New Tables
    - `feedback_submissions`
      - `id` (uuid, primary key)
      - `event_type` (text) - type of events the professional works on
      - `stress_points` (text) - most stressful parts of event execution
      - `current_tools` (text) - tools and processes currently used
      - `breakdown_points` (text) - what breaks down during live execution
      - `top_headache` (text) - the one operational headache they'd eliminate
      - `open_to_conversation` (boolean) - willing for a follow-up call
      - `name` (text) - submitter's name
      - `email` (text) - submitter's email
      - `company_role` (text) - company and role
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `feedback_submissions` table
    - Add policy for anonymous users to insert their own feedback (public form)
    - No read policy for anonymous users (data is private to admin)
*/

CREATE TABLE IF NOT EXISTS feedback_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL DEFAULT '',
  stress_points text NOT NULL DEFAULT '',
  current_tools text NOT NULL DEFAULT '',
  breakdown_points text NOT NULL DEFAULT '',
  top_headache text NOT NULL DEFAULT '',
  open_to_conversation boolean NOT NULL DEFAULT false,
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  company_role text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE feedback_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
  ON feedback_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
