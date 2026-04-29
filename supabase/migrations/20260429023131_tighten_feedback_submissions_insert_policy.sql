/*
  # Tighten RLS INSERT policy on feedback_submissions

  1. Security Changes
    - Drop the existing unrestricted "Anyone can submit feedback" policy
    - Replace with a new policy that validates:
      - Required fields (event_type, name, email) are non-empty
      - email has a basic format check (contains @)
      - id must use the server default (gen_random_uuid), not a client-supplied value
      - created_at must use the server default (now), not a client-supplied value

  2. Notes
    - The form is public (anon), so we cannot check auth.uid().
      Instead we enforce data-quality constraints so the policy is not trivially true.
*/

DROP POLICY IF EXISTS "Anyone can submit feedback" ON feedback_submissions;

CREATE POLICY "Anon can insert valid feedback"
  ON feedback_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    length(trim(event_type)) > 0
    AND length(trim(name)) > 0
    AND length(trim(email)) > 0
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND id = gen_random_uuid()
    AND created_at = now()
  );
