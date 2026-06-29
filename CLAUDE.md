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

This is a single-page marketing site for **Vision Amah**, an IT/AI solutions company based in Conakry, Guinée. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS — no backend, no database, no CMS.

- `src/app/page.tsx` composes the home page as a stack of full-width sections rendered in order: `Navbar`, `Hero`, `Services`, `WhyUs`, `Projects`, `Contact`, `Footer`.
- `src/app/projets/[slug]/page.tsx` is a dynamic route rendering one detail page per project (statically generated via `generateStaticParams`), reusing `Navbar`/`Footer` and showing the project's media, full description, tech stack, and an external link when one exists. Project data is centralized in `src/data/projects.ts` (the `Project` type and `projects` array) — this is the single source of truth consumed by both the home page's `Projects` grid and the `/projets/[slug]` detail pages. To add/edit/remove a project, edit this file only.
- Each home-page section lives in its own file under `src/components/` and is self-contained: content (copy, service lists) is defined as local data arrays at the top of the component file, not pulled from external data sources or CMS. To change copy or add/remove a service, edit the array in the corresponding component.
- Sections are linked via in-page anchors (`/#services`, `/#pourquoi`, `/#realisations`, `/#contact`) used both by the `Navbar` and as `id` attributes on each `<section>`. Anchors are prefixed with `/` (not bare `#...`) so they still resolve correctly from non-home routes like `/projets/[slug]`.
- Visual language: dark theme (`--background`/`--foreground` CSS vars in `src/app/globals.css`), uppercase tracked-out headings (`tracking-widest-plus` utility), and a single accent color (`--accent`, blue) used sparingly for CTAs/highlights. This SpaceX-inspired aesthetic (full-bleed media backgrounds, bold typography, minimal color, scroll-triggered reveals) is intentional — keep new sections consistent with it rather than introducing new color accents or lighter themes. Video/media backgrounds are only used on full-screen sections without dense card grids (`Hero`, `WhyUs`, `Contact`); grid-based sections (`Services`, `Projects`) stay on a plain black background.
- `Navbar` and any component using scroll listeners or `framer-motion` must be a client component (`"use client"`) since the rest of the tree (layout, page) is server-rendered by default in the App Router.
- Scroll-in animations use `framer-motion`'s `whileInView` (with `viewport={{ once: true }}`) for section content.
- `VideoBackground` (`src/components/VideoBackground.tsx`) renders a looping muted `<video>` with a dark gradient/vignette overlay for text legibility. It takes `src`/`alt` props — each full-screen section passes its own distinct clip (no two sections share the same video). Video files live in `public/video/` (hero/section backgrounds) and `public/video/projects/` (per-project demo clips used inside `Projects` cards).
- `Services` cards and `Projects`/`/projets/[slug]` cards each pair copy with a visual: real product screenshots/demo videos where available (`public/projects/*.png`, `public/video/projects/*.mp4`), falling back to hand-authored SVG placeholders (`public/projects/*.svg`) styled to match the site's dark/accent palette for projects without captured media. Cards render a `<video>` instead of `next/image` when a project object has a `video` field; `fit: "contain"` overrides the default `object-cover` for non-screenshot assets like logos.
- The site wordmark is a hand-authored SVG (`public/logo.svg`, white-on-black, SpaceX-style condensed bold caps, no icon) rendered via `next/image` in `Navbar`.
- Fonts are local Geist variable fonts loaded via `next/font/local` in `src/app/layout.tsx` (`src/app/fonts/`), exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) and consumed in `globals.css`.
- Path alias `@/*` maps to `src/*` (configured in `tsconfig.json`).
- See `docs/PROJET.md` for a fuller (French) write-up of the project's purpose, structure, and design decisions.
