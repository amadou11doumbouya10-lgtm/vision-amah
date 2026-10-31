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

This is a marketing site for **Vision Amah**, an IT/AI solutions company based in Conakry, Guinée. Built with Next.js 15 (App Router, React 19), TypeScript, and Tailwind CSS — no backend, no database, no CMS.

### Routes

- `/` — home page (`src/app/page.tsx`): stack of full-width sections in order: `Navbar`, `Hero`, `ToolsMarquee`, `Applications`, `Services`, `WhyUs`, `QuiSuisJe`, `Processus`, `Projects`, `Testimonials` (hidden when empty), `FAQ`, `Contact`, `Footer`.
- `/services/[slug]` — service detail page (`src/app/services/[slug]/page.tsx`), statically generated via `generateStaticParams`: full-width hero with the service photo (same pattern as project pages), description, "what's included" list, and related projects (via `relatedProjectSlugs`). Linked from each card of the home `Services` grid.
- `/projets/[slug]` — project detail page (`src/app/projets/[slug]/page.tsx`), statically generated via `generateStaticParams`, reusing `Navbar`/`Footer`.
- `/blog` — blog index (`src/app/blog/page.tsx`); `/blog/[slug]` — article page (`src/app/blog/[slug]/page.tsx`), statically generated. Linked from Navbar.
- `/portfolio` — personal portfolio page for Amadou Doumbouya (`src/app/portfolio/page.tsx`): hero, stats, projects grid, skills (including ML), timeline, certifications (images/PDFs in `public/certifications/`), contact. Linked from Navbar.
- `/sitemap.xml` — auto-generated via `src/app/sitemap.ts` (lists `/`, `/portfolio`, `/blog`, all `/services/[slug]`, `/projets/[slug]` and `/blog/[slug]`).
- `/robots.txt` — auto-generated via `src/app/robots.ts`.
- `/icon.png` / `/apple-icon.png` / `/favicon.ico` — static icons in `src/app/` (Next.js file convention), cut from the logo's VA monogram on `#060a14`. `public/icon-512.png` is the large PWA icon.
- `/og-image.jpg` — 1200×630 social sharing image (`public/og-image.jpg`, the full brand banner), referenced explicitly in the `openGraph`/`twitter` metadata of `layout.tsx` and `/blog/[slug]`.
- `/_not-found` — custom 404 page (`src/app/not-found.tsx`).
- `/error` — global error boundary (`src/app/error.tsx`, `"use client"`).

### Data

- `src/data/projects.ts` — single source of truth for all projects (type `Project` + `projects` array). Consumed by the home `Projects` grid, all `/projets/[slug]` detail pages, and the `/portfolio` projects grid. To add/edit/remove a project, edit this file only.
- `src/data/services.ts` — single source of truth for services (type `Service` + `services` array + `CATEGORIES`). Consumed by the home `Services` grid (grouped by category) and the `/services/[slug]` pages. `hiddenFromHome: true` keeps a service reachable at its URL but out of the home grid (currently `cybersecurite`).
- `src/data/applications.ts` — the apps shown in large format by the home `Applications` section (chosen by Vision Amah). Each entry links a `projects.ts` slug (name, stack, `/projets/[slug]`) to a status (`En ligne` | `Version de test` | `En développement` | `Code public`), a hook line, an outbound link and a real visual (screenshot, demo video, or a real file produced by the tool). Keep every status true and update it when an app changes state.
- `src/data/blog.ts` — blog articles (type `BlogPost` + `posts` array). Content is an array of typed blocks (`paragraph` | `heading` | `list`), rendered by `/blog/[slug]` — no Markdown or raw HTML. To publish an article, add an entry here.

### Components

- Home-page sections live under `src/components/`. Sections with static copy (`WhyUs`, `QuiSuisJe`, `Processus`, `FAQ`, `Testimonials`) define it as local arrays at the top of the file; `Services` and `Projects` read from `src/data/`.
- `Navbar.tsx` — fixed nav, becomes opaque on scroll, includes mobile hamburger menu with body scroll-lock on open. Links: Services, Pourquoi nous, Réalisations, Portfolio, Blog, Contact.
- `QuiSuisJe.tsx` — founder section (`#apropos`): photo `public/about/amadou-doumbouya.jpg` + badges.
- `Processus.tsx` — 4-step process (audit gratuit → devis → développement → livraison & formation).
- `FAQ.tsx` — accordion of frequent questions (`#faq`), first item open by default.
- `WhatsAppFloat.tsx` — floating WhatsApp bubble rendered on every page (mounted in `layout.tsx`), stacked above the Avatar Amah widget in the bottom-right corner. Number and prefilled message are constants at the top of the file.
- `ProjectCardVideo.tsx` — video for the home `Projects` cards; sets the video source only when the card nears the viewport (avoids downloading clips the visitor hasn't reached) and respects `prefers-reduced-motion`.
- `Hero.tsx` — two columns, stacked on mobile: availability badge, the page's only `<h1>`, subtitle, the two CTAs (`/#contact`, `/#realisations`) and two guarantees on the left; `CampusMarketMockup` on the right. No video background.
- `CampusMarketMockup.tsx` — HTML/CSS phone showing the real CampusMarket Guinée catalogue screen (colors, "c-sac" logo, categories and card layout taken from the `campusmarket` repo). The 4 products are the live site's demo products and keep their "Démo" badge (photos in `public/campusmarket/`). CampusMarket has no in-app messaging or online payment — contact is via WhatsApp — so the mockup and its floating cards must never suggest otherwise, and show only true facts (no invented figures).
- `ToolsMarquee.tsx` — band right below the hero ("Les outils avec lesquels on construit"): infinite CSS-only scroll of the tools list, each with its monochrome logo when one exists (SVG paths from Simple Icons, CC0, in `toolLogos.ts`; Groq, Playwright and Codex have none and show their name only). The list is rendered twice (the copy `aria-hidden`); `animate-marquee` keyframe in `globals.css` (linear, 28s), paused on hover. With `prefers-reduced-motion` it stops and shows the list wrapped and centered, without the copy. Only list tools actually used in a real project (site Réalisations or the repos' `package.json` / `requirements.txt`).
- `Applications.tsx` — "Nos applications" section (`#applications`), between `ToolsMarquee` and `Services`: one app at a time in a large frame (browser bar with the real URL, plain window, or file view) with status, hook, stack and two buttons (open the app / project page). Accessible tabs (arrow keys, Home/End). Auto-advances every 7s via the `animate-progression` bar under the active tab (its `animationend` moves to the next app); paused on hover, keyboard focus and off-screen, stopped by the pause button or as soon as the visitor picks a tab, and disabled with `prefers-reduced-motion`.
- `VideoBackground.tsx` — looping muted `<video>` with dark gradient overlay. Uses `IntersectionObserver` to lazy-load the video source only when the section enters the viewport. `WhyUs` and `Contact` each pass their own distinct clip.
- `ContactForm.tsx` — Formspree-based contact form (name, email, optional phone, message). Reads `process.env.NEXT_PUBLIC_FORMSPREE_ID`. Four states: `idle | submitting | success | error`. Includes a `_gotcha` honeypot field to block spam bots. Used inside `Contact.tsx` above the WhatsApp/email buttons.
- `AvatarAmahWidget.tsx` — mounted globally in `layout.tsx`; embedded iframe widget for Avatar Amah chatbot warm-up. Triggers on user interaction (pointermove/scroll/keydown/touchstart) or after 4s idle. Has `sandbox="allow-scripts allow-forms allow-popups allow-same-origin"`.
- `ProjectHeroVideo.tsx` — video component for project detail hero that respects `prefers-reduced-motion` (disables autoPlay/loop when reduced motion is on).
- `Testimonials.tsx` — client testimonials section. Returns `null` when the `testimonials` array is empty — the section is invisible until real client quotes are added. To activate: fill the `testimonials` array in the file with real client feedback.
- `src/hooks/useReducedMotion.ts` — custom React hook that reads the `prefers-reduced-motion` media query.

### Visual language

Dark navy theme (`--background` #060a14 / `--foreground` in `src/app/globals.css`, stored as RGB channels so Tailwind opacity modifiers like `bg-background/80` work — sections use `bg-background`, never `bg-black`), uppercase tracked-out headings (`tracking-widest-plus` utility), single accent color (`--accent: #026bde`, from the logo) used sparingly for CTAs/highlights; `text-accent` maps to the lighter `--accent-text` (#3489e5) so small labels keep ≥4.5:1 contrast. SpaceX-inspired aesthetic — keep new sections consistent. Video/media backgrounds only on full-screen sections (`WhyUs`, `Contact`; the `Hero` shows the CampusMarket mockup on a plain background with an accent glow instead); grid sections (`Services`, `Projects`) stay on plain black.

### Static assets

- `public/projects/` — project visuals in 16:9: real screenshots (`*.png`/`*.jpeg`) and, for projects that don't have one yet, CC0 stock photos (`*.jpg`).
- `public/services/` — one CC0 stock photo per service (9 JPGs, 16:9, referenced by the `image` field in `src/data/services.ts`), used by the home grid and `/services/[slug]`. Kept separate from `public/projects/`.
- Every stock photo's source is listed in `docs/CREDITS-PHOTOS.md`; any new image must be free for commercial use (CC0 or equivalent) and added there.
- `public/campusmarket/` — the 4 demo product photos shown in `CampusMarketMockup` (Unsplash, same photos as on the live CampusMarket site).
- `public/about/` — founder photo (used by `QuiSuisJe` and `/portfolio`).
- `public/certifications/` — certificate images/PDFs linked from the `/portfolio` certifications section.
- `public/video/` — background videos for full-screen sections; `public/video/projects/` for per-project demo clips.

### App metadata (`src/app/layout.tsx`)

- `siteUrl = "https://vision-amah.vercel.app"` — used for `metadataBase`, OG URLs, sitemap, robots.
- Full Open Graph + Twitter card metadata, JSON-LD `LocalBusiness` schema (with `<` escaping to guard against future dynamic values).
- `verification.google` reads `process.env.GOOGLE_SITE_VERIFICATION` (set in Vercel env vars).
- `<Analytics />` from `@vercel/analytics/next` — zero-config Vercel page-view tracking.
- Skip-to-content `<a href="#main-content">` for accessibility.
- Site-wide floating widgets mounted in `<body>`: `<WhatsAppFloat />` and `<AvatarAmahWidget />`.

### PWA

`public/manifest.webmanifest` — PWA manifest referencing `/icon.png` (192), `/icon-512.png` and `/apple-icon.png`. Theme color `#060a14`.

### Security (`next.config.mjs`)

All HTTP responses carry security headers:
- `Content-Security-Policy` — restricts scripts, styles, media, connections, and frames to the origins actually used (self, Formspree, Avatar Amah widget, Vercel Analytics). `script-src` keeps `'unsafe-inline'` because Next.js App Router injects inline scripts for hydration.
- `Strict-Transport-Security` — HTTPS enforced for 2 years with `preload`.
- `X-Frame-Options: DENY` + `frame-ancestors 'none'` — blocks clickjacking.
- `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` (disables camera, mic, geolocation, payment, USB).
- `poweredByHeader: false` — removes `X-Powered-By: Next.js` from every response.

### Environment variables (set in Vercel dashboard)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID — activates the contact form email sending |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |

### Other notes
- Next.js 15: dynamic route `params` is a Promise — page components and `generateMetadata` in `[slug]` routes are `async` and `await params`.

- `Navbar` and any component using scroll listeners or `framer-motion` must be `"use client"`.
- Scroll-in animations use `framer-motion`'s `whileInView` with `viewport={{ once: true }}`.
- The logo is `public/logo.png` (VA monogram + "VISION AMAH", transparent background, made for dark backgrounds) rendered via `next/image` in `Navbar`. The desktop nav links only show from `xl` (1280px); below that they live in the hamburger menu, so the logo never gets squeezed.
- Fonts are local Geist variable fonts (`src/app/fonts/`), exposed as CSS vars `--font-geist-sans` / `--font-geist-mono`.
- Path alias `@/*` maps to `src/*` (`tsconfig.json`).
- AVIF/WebP image optimization enabled in `next.config.mjs`.
- See `docs/PROJET.md` for a fuller French write-up of the project's purpose, structure, and design decisions.
