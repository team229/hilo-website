## Project Overview

Astro 7.x static site for HiLo Heating & Air (HVAC company in Orange County, CA). React 19 components, Tailwind CSS v4, content collections for blog.

## Development

Start dev server in background:
```
astro dev --background
```

Stop: `astro dev stop` | Status: `astro dev status` | Logs: `astro dev logs`

Build: `astro build` (outputs to `dist/`)

## Architecture

- **Pages**: 17 root-level service pages, 4 service categories (`src/pages/service/`), 12 service areas (`src/pages/service-areas/`), 9 blog posts (`src/content/blog/`)
- **Components**: Mix of `.astro` (server-rendered) and `.tsx` (React, interactive). React components use `client:load` or `client:visible` directives.
- **Layouts**: `ServicePageLayout.astro` wraps all service pages with hero + slot pattern. `BaseLayout.astro` provides HTML head, Schema.org, and meta tags.
- **Content**: Blog posts use `astro:content` with Zod schema (title, description, date, category, author, image).

## Key Files

- `src/components/LicenseBadges.astro` - "Licensed • Bonded • Insured" section (appears on all service pages)
- `src/components/ServiceForm.tsx` - React contact form with captcha
- `src/components/Reviews.tsx` - Customer reviews component
- `src/layouts/ServicePageLayout.astro` - Shared layout for service pages

## Conventions

- Service pages use `ServicePageLayout` with `heroTitle` and `heroSubtitle` props
- Service area pages use `BaseLayout` directly with inline hero sections
- React components use `client:load` for forms, `client:visible` for below-fold content

## Deployment

Deploys to Bunny Storage (S3-compatible) via AWS CLI.

**Prerequisites:** AWS CLI installed (`npm install -g awscli` or `brew install awscli`)

**Commands:**
- `npm run deploy` - Build + sync to Bunny Storage
- `npm run deploy:sync` - Sync only (skip build)
- `npm run deploy:dry` - Dry run (see what would upload)

**Environment:** Credentials stored in `.env` (gitignored). Uses Bunny Storage S3 API at `de-s3.storage.bunnycdn.com`.
