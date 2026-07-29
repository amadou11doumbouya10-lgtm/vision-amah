# Vision Amah — Documentation du projet

## 1. Vue d'ensemble

Vision Amah est un site vitrine pour une société de solutions informatiques et IA basée à Conakry, Guinée. Le site présente les services, les réalisations, les coordonnées de contact de l'entreprise, et un portfolio personnel — sans backend, base de données ni CMS.

- **Cible** : clients en Afrique francophone et à l'international cherchant des assistants IA, chatbots, plateformes web, e-commerce ou cybersécurité.
- **URL de production** : `https://vision-amah.vercel.app`
- **Langue** : français (`lang="fr"` dans `layout.tsx`).

### Routes

| Route | Description |
|---|---|
| `/` | Page d'accueil one-page (sections empilées) |
| `/projets/[slug]` | Page de détail par projet (générée statiquement) |
| `/portfolio` | Portfolio personnel d'Amadou Doumbouya |
| `/sitemap.xml` | Sitemap auto-généré (indexation Google) |
| `/robots.txt` | Directives robots auto-générées |
| `/opengraph-image` | Image sociale 1200×630 pour partage |
| `/icon` / `/apple-icon` | Icônes PWA générées dynamiquement |
| `/_not-found` | Page 404 personnalisée |

## 2. Stack technique

| Outil | Rôle |
|---|---|
| Next.js 14 (App Router) | Framework React, rendu serveur par défaut |
| TypeScript | Typage statique |
| Tailwind CSS | Styling utilitaire |
| Framer Motion | Animations au scroll et au chargement |
| `@vercel/og` | Génération d'images OG et icônes PWA |
| `@vercel/analytics` | Suivi des pages vues (zero-config) |
| Formspree | Formulaire de contact serverless (env var `NEXT_PUBLIC_FORMSPREE_ID`) |
| ESLint (`next/core-web-vitals`, `next/typescript`) | Linting |
| Geist (local via `next/font/local`) | Police de caractères |

Aucune base de données, aucune API externe à part Formspree, aucun gestionnaire d'état global.

## 3. Structure du projet

```
src/
  app/
    layout.tsx               → squelette HTML, polices, métadonnées SEO complètes, JSON-LD, Analytics
    page.tsx                 → assemble les sections de la page d'accueil dans l'ordre d'affichage
    globals.css              → variables CSS (couleurs), animations CSS (starfield)
    fonts/                   → fichiers de police Geist (.woff)
    icon.tsx                 → icône PWA 32×32 "VA" générée via @vercel/og (force-dynamic)
    apple-icon.tsx           → icône Apple Touch 180×180 via @vercel/og (force-dynamic)
    opengraph-image.tsx      → image OG 1200×630 pour partage social (force-dynamic)
    sitemap.ts               → sitemap.xml auto-généré (/, /projets/[slug], /portfolio)
    robots.ts                → robots.txt auto-généré
    not-found.tsx            → page 404 personnalisée
    error.tsx                → error boundary global (client component)
    projets/[slug]/
      page.tsx               → page de détail d'un projet (statique, via generateStaticParams)
    portfolio/
      page.tsx               → portfolio personnel Amadou Doumbouya (hero, stats, projets, skills ML, certifications, contact)
  components/
    Navbar.tsx               → navigation fixe, opaque au scroll, menu hamburger mobile + scroll-lock
    Hero.tsx                 → section d'accueil plein écran
    Services.tsx             → grille des 6 services proposés
    WhyUs.tsx                → 3 arguments différenciants (statistiques)
    Projects.tsx             → grille des réalisations/projets (lit src/data/projects.ts)
    Contact.tsx              → formulaire Formspree + boutons WhatsApp/email
    ContactForm.tsx          → formulaire Formspree (nom, email, message) — 4 états : idle/submitting/success/error
    Footer.tsx               → mentions légales, copyright
    VideoBackground.tsx      → fond vidéo lazy-loadé (IntersectionObserver) avec overlay, utilisé par Hero/WhyUs/Contact
    AvatarAmahWidget.tsx     → iframe chatbot Avatar Amah, warm-up au premier interaction ou après 4s idle
    ProjectHeroVideo.tsx     → vidéo hero projet respectant prefers-reduced-motion
  hooks/
    useReducedMotion.ts      → hook React qui lit la media query prefers-reduced-motion
  data/
    projects.ts              → source unique de vérité des projets (type Project + tableau projects)
docs/
  PROJET.md                  → ce fichier
  projets/                   → un fichier markdown de référence par projet
public/
  logo.svg                   → wordmark SVG blanc-sur-noir
  manifest.webmanifest       → manifeste PWA (nom, thème #050505, icônes)
  projects/                  → visuels projets (*.png screenshots, *.svg placeholders)
  video/                     → vidéos de fond sections (hero/section backgrounds)
  video/projects/            → démos vidéo par projet
CLAUDE.md                    → instructions pour Claude Code (commandes, architecture)
```

### Données de projets (`src/data/projects.ts`)

Chaque projet est un objet `Project` avec :
- `summary` / `description` : résumé (carte) et paragraphe complet (page de détail) ;
- `stack` : liste de tags technologiques ;
- `features` (optionnel) : fonctionnalités clés, affichées sur la page de détail ;
- `pages` (optionnel) : liste `{ name, description }` des vues du projet ;
- `architecture` (optionnel) : arborescence technique en texte brut ;
- `externalHref` / `externalLabel` : lien vers la démo/le site en ligne ;
- `repoHref` (optionnel) : lien GitHub du code source ;
- `image` (optionnel) : screenshot PNG dans `public/projects/` ;
- `svg` (optionnel) : placeholder SVG dans `public/projects/` ;
- `video` (optionnel) : démo MP4 dans `public/video/projects/`.

Ce fichier est la seule source de vérité consommée par la grille `Projects.tsx`, les pages `/projets/[slug]`, et le portfolio `/portfolio`.

## 4. Construction et choix de conception

### 4.1 Direction artistique : inspiration SpaceX

Le site a été conçu pour adopter l'esthétique de spacex.com :
- **Fond noir** (`--background: #050505`) et texte clair (`--foreground: #f2f2f2`), définis dans `globals.css`.
- **Une seule couleur d'accent** (`--accent: #3b82f6`, bleu) utilisée avec parcimonie sur les CTA, tags et statistiques.
- **Typographie massive en majuscules** : `font-black`/`font-bold`, `uppercase`, `tracking-widest-plus` (`letter-spacing: 0.25em`).
- **Sections plein écran** pour Hero, WhyUs et Contact (`min-h-screen`/`h-screen`).
- **Fond animé du Hero** : champ d'étoiles pur CSS (classe `.starfield`, keyframe `drift` dans `globals.css`).

### 4.2 Navigation

`Navbar.tsx` est client (`"use client"`) car il écoute le scroll pour basculer entre transparent (haut de page) et `bg-black/80 backdrop-blur-md` (après 40px). Il inclut un menu hamburger mobile avec verrouillage du scroll `document.body.style.overflow = "hidden"` pendant l'ouverture.

Liens de navigation : Services → Pourquoi nous → Réalisations → **Portfolio** → Contact.

### 4.3 Animations

- Hero : animations à l'arrivée (`initial`/`animate` Framer Motion).
- Autres sections : `whileInView` + `viewport={{ once: true }}` pour déclencher un fondu/translation à l'entrée dans le viewport.
- `ProjectHeroVideo.tsx` et `useReducedMotion` : désactivent `autoPlay`/`loop` si l'OS a `prefers-reduced-motion: reduce`.
- `VideoBackground.tsx` : lazy-loading via `IntersectionObserver` — la vidéo ne se charge que quand la section entre dans le viewport.

### 4.4 SEO et performance

- `layout.tsx` exporte `metadata` complet : `title`, `description`, `keywords`, Open Graph, Twitter card, `metadataBase = "https://vision-amah.vercel.app"`.
- JSON-LD `LocalBusiness` schema injecté dans `<body>` via `<script type="application/ld+json">`.
- `verification.google` lit `process.env.GOOGLE_SITE_VERIFICATION` → balise `<meta name="google-site-verification">` automatique.
- `sitemap.ts` génère `/sitemap.xml` avec toutes les routes (priorité 1.0 pour `/`, 0.8 pour `/portfolio`, 0.7 pour les projets).
- `robots.ts` pointe vers `/sitemap.xml`.
- `opengraph-image.tsx` génère l'image 1200×630 pour le partage sur les réseaux sociaux.
- Images optimisées AVIF/WebP via `next.config.mjs`.
- `@vercel/analytics` : suivi des pages vues sans configuration supplémentaire.
- PWA : `manifest.webmanifest` + icônes `/icon` et `/apple-icon` générées via `@vercel/og`.

### 4.5 Accessibilité

- Skip-to-content `<a href="#main-content">` dans `layout.tsx` (visible uniquement au focus clavier).
- `aria-label` et `aria-expanded` sur le bouton hamburger.
- Contraste fort (texte clair sur fond noir).
- `useReducedMotion` pour désactiver les vidéos auto-jouées si demandé par l'OS.

### 4.6 Formulaire de contact (Formspree)

`ContactForm.tsx` envoie les données à `https://formspree.io/f/${NEXT_PUBLIC_FORMSPREE_ID}`. L'ID est stocké dans la variable d'environnement `NEXT_PUBLIC_FORMSPREE_ID` dans Vercel (jamais dans le code). Le formulaire gère 4 états : `idle`, `submitting`, `success`, `error`.

## 5. Modifier le contenu

| Ce que tu veux changer | Où modifier |
|---|---|
| Texte / services sur la page d'accueil | Tableau local en haut du composant concerné (`Services.tsx`, `WhyUs.tsx`, etc.) |
| Ajouter/modifier/supprimer un projet | `src/data/projects.ts` uniquement |
| Modifier le portfolio | `src/app/portfolio/page.tsx` |
| Changer les liens de la navbar | Tableau `links` dans `src/components/Navbar.tsx` |
| Métadonnées SEO globales | `src/app/layout.tsx` |
| Activer le formulaire de contact | Ajouter `NEXT_PUBLIC_FORMSPREE_ID=<id>` dans Vercel → Environment Variables |
| Activer Google Search Console | Ajouter `GOOGLE_SITE_VERIFICATION=<token>` dans Vercel → Environment Variables |

## 6. Commandes utiles

```bash
npm run dev          # serveur de développement (http://localhost:3000)
npm run build        # build de production (inclut type-check + lint)
npm run start        # sert le build de production
npm run lint         # ESLint
npx tsc --noEmit     # vérification des types seule
```

Il n'y a pas de suite de tests dans ce projet.

## 7. Pistes d'amélioration futures

- Ajouter de vraies captures d'écran/démos pour les projets qui ont encore des SVG placeholders (Vertex Shop, Transport Agency, Ticketing Platform, Cyber Content Generator).
- Publier les dépôts GitHub manquants (Transport Agency, Ticketing Platform, Cyber Content Generator) pour afficher un bouton « Voir le code » sur leurs pages de détail.
- Ajouter des témoignages clients ou des études de cas dans une nouvelle section.
- Internationalisation (EN/FR) si une audience anglophone est ciblée.
