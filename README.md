# Apex HR Website (Global — www.apexhrllc.com)

Employer-first HR, recruitment and people-consulting platform for Apex HR,
for employers across Africa, North America, Europe and the Middle East.
This is a standalone website, separate from the UK site — read
[docs/GLOBAL-SITE.md](./docs/GLOBAL-SITE.md) first for how it is set up.
See [CLAUDE.md](./CLAUDE.md) for the full operating brief and
[DESIGN.md](./DESIGN.md) for the design system this build implements.

## Stack

Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS 4 · npm

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # run the production build
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values as integrations
are confirmed. No live credentials are required for the frontend to render —
see `src/lib/sanity/` and `src/lib/supabase/` for the typed integration
boundaries.

## Job Board

The WordPress vacancy plugin, publishing steps, Supabase migration and required
Vercel environment variables are documented in
[docs/JOB-BOARD-SETUP.md](./docs/JOB-BOARD-SETUP.md). The Next.js website is the
public presentation layer; do not publish vacancy URLs or vacancy sitemap
entries from the WordPress CMS.
