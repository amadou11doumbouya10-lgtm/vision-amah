# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build (also runs type-checking and linting)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`next/core-web-vitals`, `next/typescript`)
- `npx tsc --noEmit` — type-check only, without a full build

There is no test suite in this project.

## Architecture

This is a marketing site for **Vision Amah**, an IT/AI solutions company based in Conakry, Guinée. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS — no backend, no database, no CMS.

### Routes

- `/` — home page (`src/app/page.tsx`): stack of full-width sections in order: `Navbar`, `Hero`, `Services`, `WhyUs`, `Projects`, `Contact`, `Footer`.
- `/projets/[slug]` — project detail page (`src/app/projets/[slug]/page.tsx`), statically generated via `generateStaticParams`, reusing `Navbar`/`Footer`.
- `/portfolio` — personal portfolio page for Amadou Doumbouya (`src/app/portfolio/page.tsx`): hero, stats, projects grid, skills (including ML), timeline, certifications, contact. Linked from Navbar.
- `/sitemap.xml` — auto-generated via `src/app/sitemap.ts` (lists `/`, all `/projets/[slug]`, `/portfolio`).
- `/robots.txt` — auto-generated via `src/app/robots.ts`.
- `/icon` / `/apple-icon` — PWA icons generated via `@vercel/og` (`src/app/icon.tsx`, `src/app/apple-icon.tsx`). Both have `export const dynamic = "force-dynamic"` to avoid a Windows path-spaces bug with `@vercel/og`.
- `/opengraph-image` — 1200×630 OG social sharing image via `src/app/opengraph-image.tsx`. Same `dynamic = "force-dynamic"` fix.
- `/_not-found` — custom 404 page (`src/app/not-found.tsx`).
- `/error` — global error boundary (`src/app/error.tsx`, `"use client"`).

### Data

- `src/data/projects.ts` — single source of truth for all projects (type `Project` + `projects` array). Consumed by the home `Projects` grid, all `/projets/[slug]` detail pages, and the `/portfolio` projects grid. To add/edit/remove a project, edit this file only.

### Components

- Each home-page section is self-contained under `src/components/`: its copy/data is defined as local arrays at the top of the file. To change text or add/remove a service, edit the array in the component.
- `Navbar.tsx` — fixed nav, becomes opaque on scroll, includes mobile hamburger menu with body scroll-lock on open. Links: Services, Pourquoi nous, Réalisations, Portfolio, Contact.
- `VideoBackground.tsx` — looping muted `<video>` with dark gradient overlay. Uses `IntersectionObserver` to lazy-load the video source only when the section enters the viewport. Each full-screen section (`Hero`, `WhyUs`, `Contact`) passes its own distinct clip.
- `ContactForm.tsx` — Formspree-based contact form (name, email, message). Reads `process.env.NEXT_PUBLIC_FORMSPREE_ID`. Four states: `idle | submitting | success | error`. Used inside `Contact.tsx` above the WhatsApp/email buttons.
- `AvatarAmahWidget.tsx` — embedded iframe widget for Avatar Amah chatbot warm-up. Triggers on user interaction (pointermove/scroll/keydown/touchstart) or after 4s idle. Has `sandbox="allow-scripts allow-forms allow-popups allow-same-origin"`.
- `ProjectHeroVideo.tsx` — video component for project detail hero that respects `prefers-reduced-motion` (disables autoPlay/loop when reduced motion is on).
- `src/hooks/useReducedMotion.ts` — custom React hook that reads the `prefers-reduced-motion` media query.

### Visual language

Dark theme (`--background`/`--foreground` CSS vars in `src/app/globals.css`), uppercase tracked-out headings (`tracking-widest-plus` utility), single accent color (`--accent: #3b82f6`, blue) used sparingly for CTAs/highlights. SpaceX-inspired aesthetic — keep new sections consistent. Video/media backgrounds only on full-screen sections (`Hero`, `WhyUs`, `Contact`); grid sections (`Services`, `Projects`) stay on plain black.

### App metadata (`src/app/layout.tsx`)

- `siteUrl = "https://vision-amah.vercel.app"` — used for `metadataBase`, OG URLs, sitemap, robots.
- Full Open Graph + Twitter card metadata, JSON-LD `LocalBusiness` schema.
- `verification.google` reads `process.env.GOOGLE_SITE_VERIFICATION` (set in Vercel env vars).
- `<Analytics />` from `@vercel/analytics/next` — zero-config Vercel page-view tracking.
- Skip-to-content `<a href="#main-content">` for accessibility.

### PWA

`public/manifest.webmanifest` — PWA manifest referencing `/icon` and `/apple-icon`. Theme color `#050505`.

### Environment variables (set in Vercel dashboard)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID — activates the contact form email sending |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |

### Other notes

- `Navbar` and any component using scroll listeners or `framer-motion` must be `"use client"`.
- Scroll-in animations use `framer-motion`'s `whileInView` with `viewport={{ once: true }}`.
- The wordmark is `public/logo.svg` (white-on-black SVG) rendered via `next/image` in `Navbar`.
- Fonts are local Geist variable fonts (`src/app/fonts/`), exposed as CSS vars `--font-geist-sans` / `--font-geist-mono`.
- Path alias `@/*` maps to `src/*` (`tsconfig.json`).
- AVIF/WebP image optimization enabled in `next.config.mjs`.
- See `docs/PROJET.md` for a fuller French write-up of the project's purpose, structure, and design decisions.
