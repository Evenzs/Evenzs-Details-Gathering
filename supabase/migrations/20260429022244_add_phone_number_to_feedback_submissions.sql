/*
  # Add phone_number column to feedback_submissions

  1. Modified Tables
    - `feedback_submissions`
      - Added `phone_number` (text) - submitter's phone number for follow-up

  2. Notes
    - Uses IF NOT EXISTS check to prevent errors on re-run
    - Default empty string to match existing column patterns
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'feedback_submissions' AND column_name = 'phone_number'
  ) THEN
    ALTER TABLE feedback_submissions ADD COLUMN phone_number text NOT NULL DEFAULT '';
  END IF;
END $$;