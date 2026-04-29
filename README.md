# Evenzs Customer Discovery Portal

A production-grade landing page and feedback collection tool for Evenzs, a startup building the operating system for modern event execution. The site is designed to engage event professionals across the United States, gather structured feedback about their operational pain points, and inform product development before writing production code.

## Overview

Evenzs is in a customer discovery phase. This portal serves as the public-facing entry point where planners, coordinators, venue managers, and vendors can share their real-world event challenges. Submissions are stored securely in Supabase and trigger email notifications to the founding team via Resend.

## Tech Stack

| Layer         | Technology                                                              |
| ------------- | ----------------------------------------------------------------------- |
| Framework     | [Next.js 13](https://nextjs.org/) (App Router)                         |
| Language      | TypeScript                                                              |
| Styling       | [Tailwind CSS 3](https://tailwindcss.com/) + custom design tokens      |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://radix-ui.com) |
| Animation     | [Framer Motion](https://www.framer.com/motion/)                        |
| Icons         | [Lucide React](https://lucide.dev/)                                    |
| Database      | [Supabase](https://supabase.com/) (PostgreSQL + RLS)                   |
| Edge Function | Supabase Edge Functions (Deno)                                          |
| Email         | [Resend](https://resend.com/)                                          |
| Hosting       | [Netlify](https://www.netlify.com/)                                    |
| Fonts         | Inter (sans-serif), Playfair Display (serif accent)                    |

## Features

### Landing Page

- **Hero Section** -- animated headline with gold gradient serif accent, dual CTAs, smooth-scroll navigation
- **Trust Ticker** -- infinite horizontal scroll showcasing event professional categories (planners, coordinators, venues, vendors, etc.)
- **Challenges Grid** -- six illustrated cards highlighting common operational pain points the industry faces
- **About Section** -- company mission, stats block, and a founding team quote
- **Footer** -- logo, contact email, and links to Privacy Policy and Terms of Service

### Feedback Form

A multi-step discovery form that captures:

| Field                    | Type     | Required |
| ------------------------ | -------- | -------- |
| Event Type               | Select   | Yes      |
| Stress Points            | Textarea | No       |
| Current Tools            | Textarea | No       |
| Breakdown Points         | Textarea | No       |
| Top Headache             | Textarea | No       |
| Open to Conversation     | Radio    | No       |
| Name                     | Text     | Yes      |
| Email                    | Email    | Yes      |
| Phone Number             | Tel      | No       |
| Company / Role           | Text     | No       |

On submission:

1. Data is inserted into the `feedback_submissions` table in Supabase
2. A Supabase Edge Function (`send-feedback-email`) sends a formatted HTML email notification to the founding team via the Resend API

### Legal Pages

- `/privacy` -- Privacy Policy covering data collection, usage, security, sharing, retention, user rights, cookies, and children's privacy
- `/terms` -- Terms of Service covering acceptable use, feedback submissions, intellectual property, disclaimers, liability, and governing law

### Responsive Navbar

- Fixed position with blur backdrop on scroll
- Desktop: inline nav links + gold CTA button
- Mobile: hamburger menu with animated slide-down overlay

## Project Structure

```
.
├── app/
│   ├── globals.css              # Tailwind base + custom utilities (gold gradients, card styles)
│   ├── layout.tsx               # Root layout with Inter + Playfair Display fonts, metadata
│   ├── page.tsx                 # Home page assembling all sections
│   ├── privacy/
│   │   └── page.tsx             # Privacy Policy
│   └── terms/
│       └── page.tsx             # Terms of Service
├── components/
│   ├── Navbar.tsx               # Fixed navbar with mobile drawer
│   ├── HeroSection.tsx          # Hero with animated headline + CTAs
│   ├── TrustSection.tsx         # Scrolling professional categories ticker
│   ├── ChallengesSection.tsx    # 6-card pain point grid
│   ├── FeedbackSection.tsx      # Discovery feedback form with Supabase integration
│   ├── AboutSection.tsx         # Mission statement + stats
│   ├── Footer.tsx               # Site footer with legal links
│   └── ui/                      # shadcn/ui component library
├── hooks/
│   └── use-toast.ts             # Toast notification hook
├── lib/
│   ├── supabase.ts              # Supabase client singleton
│   └── utils.ts                 # Utility helpers (cn)
├── public/
│   ├── Evenzs_logo.png
│   └── Evenzs-Logo-Final.png
├── supabase/
│   ├── functions/
│   │   └── send-feedback-email/
│   │       └── index.ts         # Edge function: email via Resend
│   └── migrations/
│       ├── 20260429012038_create_feedback_submissions.sql
│       ├── 20260429022244_add_phone_number_to_feedback_submissions.sql
│       └── 20260429023131_tighten_feedback_submissions_insert_policy.sql
├── .env                         # Supabase URL + anon key
├── components.json              # shadcn/ui configuration
├── netlify.toml                 # Netlify build config
├── next.config.js               # Next.js config (unoptimized images, ESLint bypass)
├── tailwind.config.ts           # Tailwind theme extensions
└── tsconfig.json                # TypeScript configuration
```

## Database Schema

### `feedback_submissions`

| Column                 | Type        | Default              | Nullable |
| ---------------------- | ----------- | -------------------- | -------- |
| `id`                   | uuid (PK)   | `gen_random_uuid()`  | No       |
| `event_type`           | text        | `''`                 | No       |
| `stress_points`        | text        | `''`                 | No       |
| `current_tools`        | text        | `''`                 | No       |
| `breakdown_points`     | text        | `''`                 | No       |
| `top_headache`         | text        | `''`                 | No       |
| `open_to_conversation` | boolean     | `false`              | No       |
| `name`                 | text        | `''`                 | No       |
| `email`                | text        | `''`                 | No       |
| `phone_number`         | text        | `''`                 | No       |
| `company_role`         | text        | `''`                 | No       |
| `created_at`           | timestamptz | `now()`              | No       |

### Row Level Security

RLS is enabled on the table. The active policy validates:

- Required fields (`event_type`, `name`, `email`) are non-empty
- Email matches a basic format pattern (`user@domain.tld`)
- `id` and `created_at` must use server-generated defaults (no client spoofing)
- Only the `anon` role can insert; no read/update/delete access for anonymous users

## Edge Function: `send-feedback-email`

A Deno-based Supabase Edge Function that accepts a feedback payload via POST, renders a branded HTML email, and delivers it through the Resend API.

- **Endpoint:** `{SUPABASE_URL}/functions/v1/send-feedback-email`
- **Auth:** Bearer token (Supabase anon key)
- **External Dependency:** Resend API (`RESEND_API_KEY` secret)
- **CORS:** Fully configured for browser-based requests

## Environment Variables

| Variable                       | Description                 |
| ------------------------------ | --------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`     | Supabase project URL        |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`| Supabase anonymous API key  |

The Edge Function uses these additional secrets (configured in Supabase):

| Secret           | Description            |
| ---------------- | ---------------------- |
| `RESEND_API_KEY`  | Resend email API key  |

## Design System

The site uses a dark navy + gold accent palette:

- **Navy 950** `#070C1B` -- page background
- **Navy 900** `#0D1527` -- card backgrounds
- **Navy 800** `#141E38` -- elevated surfaces
- **Gold** `#C9A84C` -- primary accent
- **Gold Bright** `#D4AF37` -- CTA gradients
- **Slate 400** `#94A3B8` -- body text
- **Slate 200** `#E2E8F0` -- high-contrast text

Custom Tailwind utilities include:

- `.text-gradient-gold` -- multi-stop gold gradient text
- `.card-dark` -- gradient card background with subtle border
- `.card-dark-hover` -- gold border glow on hover
- `.border-glow-gold` -- ambient gold box shadow

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site runs at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

## Deployment

The project is configured for Netlify deployment via `netlify.toml` using the `@netlify/plugin-nextjs` plugin.

```toml
[build]
command = "npx next build"
publish = ".next"
```

Ensure the environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) are set in Netlify's environment settings.

## Migrations

Migrations are managed through Supabase and live in `supabase/migrations/`. Each file is prefixed with a timestamp and contains a detailed markdown comment block explaining the change.

| Migration | Description |
| --------- | ----------- |
| `20260429012038_create_feedback_submissions.sql` | Creates the `feedback_submissions` table with RLS enabled |
| `20260429022244_add_phone_number_to_feedback_submissions.sql` | Adds `phone_number` column |
| `20260429023131_tighten_feedback_submissions_insert_policy.sql` | Replaces open INSERT policy with field-validated policy |

## License

All rights reserved. Copyright Evenzs.com.
