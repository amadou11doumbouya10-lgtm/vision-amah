# Vision Amah — Documentation du projet

## 1. Vue d'ensemble

Vision Amah est un site vitrine pour une société de solutions informatiques et IA basée à Conakry, Guinée. Le site présente les services (avec une page dédiée par service), les réalisations, un blog, les coordonnées de contact de l'entreprise, et un portfolio personnel — sans backend, base de données ni CMS.

- **Cible** : clients en Afrique francophone et à l'international cherchant des assistants IA, chatbots, plateformes web, e-commerce ou cybersécurité.
- **URL de production** : `https://vision-amah.vercel.app`
- **Langue** : français (`lang="fr"` dans `layout.tsx`).

### Routes

| Route | Description |
|---|---|
| `/` | Page d'accueil one-page (sections empilées) |
| `/services/[slug]` | Page dédiée par service (générée statiquement) |
| `/projets/[slug]` | Page de détail par projet (générée statiquement) |
| `/blog` | Liste des articles du blog |
| `/blog/[slug]` | Article de blog (généré statiquement) |
| `/portfolio` | Portfolio personnel d'Amadou Doumbouya |
| `/sitemap.xml` | Sitemap auto-généré (indexation Google) |
| `/robots.txt` | Directives robots auto-générées |
| `/og-image.jpg` | Image sociale 1200×630 pour partage (bannière de la marque) |
| `/icon.png` / `/apple-icon.png` / `/favicon.ico` | Icônes (onglet, écran d'accueil, PWA) tirées du monogramme VA |
| `/_not-found` | Page 404 personnalisée |

## 2. Stack technique

| Outil | Rôle |
|---|---|
| Next.js 14 (App Router) | Framework React, rendu serveur par défaut |
| TypeScript | Typage statique |
| Tailwind CSS | Styling utilitaire |
| Framer Motion | Animations au scroll et au chargement |
| `@vercel/analytics` | Suivi des pages vues (zero-config) |
| Formspree | Formulaire de contact serverless (env var `NEXT_PUBLIC_FORMSPREE_ID`) |
| ESLint (`next/core-web-vitals`, `next/typescript`) | Linting |
| Geist (local via `next/font/local`) | Police de caractères |

Aucune base de données, aucune API externe à part Formspree, aucun gestionnaire d'état global.

## 3. Structure du projet

```
src/
  app/
    layout.tsx               → squelette HTML, polices, métadonnées SEO complètes, JSON-LD, Analytics, bulle WhatsApp + widget Avatar Amah
    page.tsx                 → assemble les sections de la page d'accueil dans l'ordre d'affichage
    globals.css              → variables CSS (couleurs), keyframes (curseur du Typewriter, starfield)
    fonts/                   → fichiers de police Geist (.woff)
    icon.png                 → icône 192×192 (monogramme VA sur fond #050505)
    apple-icon.png           → icône Apple Touch 180×180
    favicon.ico              → favicon 16/32/48 px
    sitemap.ts               → sitemap.xml auto-généré (/, /portfolio, /blog, /services/[slug], /projets/[slug], /blog/[slug])
    robots.ts                → robots.txt auto-généré
    not-found.tsx            → page 404 personnalisée
    error.tsx                → error boundary global (client component)
    services/[slug]/
      page.tsx               → page dédiée d'un service : description, prestations incluses, projets liés (statique)
    projets/[slug]/
      page.tsx               → page de détail d'un projet (statique, via generateStaticParams)
    blog/
      page.tsx               → liste des articles
      [slug]/page.tsx        → article (statique), rendu à partir de blocs typés
    portfolio/
      page.tsx               → portfolio personnel Amadou Doumbouya (hero, stats, projets, skills ML, parcours, certifications, contact)
  components/
    Navbar.tsx               → navigation fixe, opaque au scroll, menu hamburger mobile + scroll-lock
    Hero.tsx                 → section d'accueil plein écran (fond vidéo + titre Typewriter)
    Services.tsx             → grille des services groupés par catégorie, chaque carte mène à /services/[slug] (lit src/data/services.ts)
    WhyUs.tsx                → 3 arguments différenciants (statistiques)
    QuiSuisJe.tsx            → présentation du fondateur (photo + badges)
    Processus.tsx            → les 4 étapes d'un projet (audit, devis, développement, livraison)
    Projects.tsx             → grille des réalisations/projets (lit src/data/projects.ts)
    ProjectCardVideo.tsx     → vidéo des cartes Réalisations, chargée seulement à l'approche de la fenêtre
    FAQ.tsx                  → questions fréquentes en accordéon
    Contact.tsx              → formulaire Formspree + boutons WhatsApp/email
    ContactForm.tsx          → formulaire Formspree (nom, email, téléphone facultatif, message) — 4 états : idle/submitting/success/error — honeypot _gotcha anti-spam
    Testimonials.tsx         → section témoignages clients — retourne null si le tableau testimonials est vide
    WhatsAppFloat.tsx        → bulle WhatsApp flottante présente sur toutes les pages
    Footer.tsx               → mentions légales, copyright
    VideoBackground.tsx      → fond vidéo lazy-loadé (IntersectionObserver) avec overlay, utilisé par Hero/WhyUs/Contact
    AvatarAmahWidget.tsx     → iframe chatbot Avatar Amah, warm-up au premier interaction ou après 4s idle
    ProjectHeroVideo.tsx     → vidéo hero projet respectant prefers-reduced-motion
    Typewriter.tsx           → effet machine à écrire réutilisable, utilisé dans Hero.tsx (prefers-reduced-motion respecté, SEO-safe)
  hooks/
    useReducedMotion.ts      → hook React qui lit la media query prefers-reduced-motion
  data/
    projects.ts              → source unique de vérité des projets (type Project + tableau projects)
    services.ts              → source unique de vérité des services (type Service, tableau services, CATEGORIES)
    blog.ts                  → articles du blog (type BlogPost + tableau posts)
docs/
  PROJET.md                  → ce fichier
  projets/                   → un fichier markdown de référence par projet
public/
  logo.png                   → logo (monogramme VA + VISION AMAH), fond transparent, pour fonds sombres
  og-image.jpg               → image de partage 1200×630 (bannière de la marque)
  icon-512.png               → grande icône PWA
  manifest.webmanifest       → manifeste PWA (nom, thème #050505, icônes)
  projects/                  → visuels projets 16:9 (captures *.png/*.jpeg, photos libres *.jpg en attendant une capture)
  services/                  → une photo libre (CC0) par service (9 fichiers .jpg)
  about/                     → photo du fondateur (QuiSuisJe, portfolio)
  certifications/            → certificats (images et PDF) du portfolio
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
- `image` : capture d'écran, ou photo libre de droits en attendant une capture, dans `public/projects/` ;
- `video` (optionnel) : démo MP4 dans `public/video/projects/` ;
- `fit` (optionnel) : `contain` ou `cover` pour le cadrage du visuel.

Ce fichier est la seule source de vérité consommée par la grille `Projects.tsx`, les pages `/projets/[slug]`, les pages services (projets liés) et le portfolio `/portfolio`.

### Données des services (`src/data/services.ts`)

Chaque `Service` a un `slug`, une `category` (parmi `CATEGORIES`), un résumé (carte), une description et une liste `included` (page dédiée), une `image` dans `public/services/`, et éventuellement `relatedProjectSlugs` (projets affichés sur la page du service). `hiddenFromHome: true` retire un service de la grille d'accueil tout en gardant sa page accessible (c'est le cas de la cybersécurité).

### Articles du blog (`src/data/blog.ts`)

Chaque `BlogPost` a un `slug`, un titre, un résumé, un `tag`, une date `publishedAt` (AAAA-MM-JJ), un temps de lecture et un `content` composé de blocs typés (`paragraph`, `heading`, `list`). Pas de Markdown ni de HTML brut : la page `/blog/[slug]` rend chaque bloc avec le style du site.

## 4. Construction et choix de conception

### 4.1 Direction artistique : inspiration SpaceX

Le site a été conçu pour adopter l'esthétique de spacex.com :
- **Fond noir** (`--background: #050505`) et texte clair (`--foreground: #f2f2f2`), définis dans `globals.css`.
- **Une seule couleur d'accent** (`--accent: #3b82f6`, bleu) utilisée avec parcimonie sur les CTA, tags et statistiques.
- **Typographie massive en majuscules** : `font-black`/`font-bold`, `uppercase`, `tracking-widest-plus` (`letter-spacing: 0.25em`).
- **Sections plein écran** pour Hero, WhyUs et Contact (`min-h-screen`/`h-screen`).
- **Fonds vidéo** sur les sections plein écran (Hero, WhyUs, Contact), chacune avec son propre clip via `VideoBackground.tsx`. La classe CSS `.starfield` (champ d'étoiles) reste définie dans `globals.css` mais n'est plus utilisée.

### 4.2 Navigation

`Navbar.tsx` est client (`"use client"`) car il écoute le scroll pour basculer entre transparent (haut de page) et `bg-black/80 backdrop-blur-md` (après 40px). Il inclut un menu hamburger mobile avec verrouillage du scroll `document.body.style.overflow = "hidden"` pendant l'ouverture.

Liens de navigation : Services → Pourquoi nous → Réalisations → Portfolio → Blog → Contact.

Ordre des sections de l'accueil : Hero → Services → Pourquoi nous → Qui suis-je → Processus → Réalisations → Témoignages (si renseignés) → FAQ → Contact.

### 4.3 Animations

- Hero : animations à l'arrivée (`initial`/`animate` Framer Motion).
- Autres sections : `whileInView` + `viewport={{ once: true }}` pour déclencher un fondu/translation à l'entrée dans le viewport.
- `ProjectHeroVideo.tsx` et `useReducedMotion` : désactivent `autoPlay`/`loop` si l'OS a `prefers-reduced-motion: reduce`.
- `VideoBackground.tsx` : lazy-loading via `IntersectionObserver` — la vidéo ne se charge que quand la section entre dans le viewport.

### 4.4 SEO et performance

- `layout.tsx` exporte `metadata` complet : `title`, `description`, `keywords`, Open Graph, Twitter card, `metadataBase = "https://vision-amah.vercel.app"`.
- JSON-LD `LocalBusiness` schema injecté dans `<body>` via `<script type="application/ld+json">`.
- `verification.google` lit `process.env.GOOGLE_SITE_VERIFICATION` → balise `<meta name="google-site-verification">` automatique.
- `sitemap.ts` génère `/sitemap.xml` avec toutes les routes (priorité 1.0 pour `/`, 0.8 pour `/portfolio` et les services, 0.6 pour le blog et ses articles ; les projets n'ont pas de priorité explicite).
- `robots.ts` pointe vers `/sitemap.xml`.
- `public/og-image.jpg` (la bannière de la marque) est l'image de partage 1200×630, déclarée dans les métadonnées `openGraph` et `twitter`.
- Images optimisées AVIF/WebP via `next.config.mjs`.
- `@vercel/analytics` : suivi des pages vues sans configuration supplémentaire.
- PWA : `manifest.webmanifest` + icônes statiques `/icon.png`, `/icon-512.png` et `/apple-icon.png`.

### 4.5 Accessibilité

- Skip-to-content `<a href="#main-content">` dans `layout.tsx` (visible uniquement au focus clavier).
- `aria-label` et `aria-expanded` sur le bouton hamburger.
- Contraste fort (texte clair sur fond noir).
- `useReducedMotion` pour désactiver les vidéos auto-jouées si demandé par l'OS.

### 4.6 Formulaire de contact (Formspree)

`ContactForm.tsx` (nom, email, téléphone facultatif, message) envoie les données à `https://formspree.io/f/${NEXT_PUBLIC_FORMSPREE_ID}`. L'ID est stocké dans la variable d'environnement `NEXT_PUBLIC_FORMSPREE_ID` dans Vercel (jamais dans le code). Le formulaire gère 4 états : `idle`, `submitting`, `success`, `error`. Le champ caché `_gotcha` (honeypot) protège le quota Formspree contre les robots spam.

### 4.7 Sécurité HTTP (`next.config.mjs`)

Tous les en-têtes de sécurité sont définis dans `next.config.mjs` et s'appliquent à toutes les routes :
- **CSP** : restreint scripts, styles, médias, connexions et cadres aux origines réellement utilisées
- **HSTS** : HTTPS forcé 2 ans avec préchargement navigateur
- **X-Frame-Options: DENY** + `frame-ancestors 'none'` : anti-clickjacking
- **Permissions-Policy** : désactive caméra, micro, géolocalisation, paiement, USB
- `poweredByHeader: false` : retire `X-Powered-By: Next.js` de chaque réponse

### 4.8 Témoignages clients (`Testimonials.tsx`)

La section `#temoignages` est rendue conditionnellement : elle retourne `null` tant que le tableau `testimonials` (dans `Testimonials.tsx`) est vide. Pour l'activer, remplir ce tableau avec de vrais retours clients obtenus avec leur accord.

### 4.9 Bulle WhatsApp (`WhatsAppFloat.tsx`)

Montée dans `layout.tsx`, elle est visible sur toutes les pages, empilée au-dessus du widget Avatar Amah (coin inférieur droit). Le numéro et le message pré-rempli sont des constantes en haut du fichier.

## 5. Modifier le contenu

| Ce que tu veux changer | Où modifier |
|---|---|
| Textes des sections de l'accueil (Pourquoi nous, Qui suis-je, Processus, FAQ) | Tableau local en haut du composant concerné |
| Ajouter/modifier/supprimer un service | `src/data/services.ts` (+ photo 16:9 libre de droits dans `public/services/`, source notée dans `docs/CREDITS-PHOTOS.md`) |
| Ajouter/modifier/supprimer un projet | `src/data/projects.ts` uniquement |
| Publier un article de blog | Ajouter une entrée dans `src/data/blog.ts` |
| Ajouter des témoignages | Tableau `testimonials` dans `src/components/Testimonials.tsx` |
| Numéro WhatsApp de la bulle flottante | Constantes en haut de `src/components/WhatsAppFloat.tsx` |
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

- Remplacer par de vraies captures d'écran/démos les photos d'illustration des projets qui n'en ont pas encore (Transport Agency, Avatar Amah, Ticketing Platform, Générateur de cours, Cyber Content Generator).
- Publier les dépôts GitHub des projets sans `repoHref` pour afficher un bouton « Voir le code » sur leurs pages de détail.
- Renseigner de vrais témoignages clients pour faire apparaître la section Témoignages.
- Publier d'autres articles de blog.
- Internationalisation (EN/FR) si une audience anglophone est ciblée.
