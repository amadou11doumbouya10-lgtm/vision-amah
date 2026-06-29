# Vision Amah — Documentation du projet

## 1. Vue d'ensemble

Vision Amah est un site vitrine pour une société de solutions informatiques et IA basée à Conakry, Guinée. Le site présente les services, les réalisations et les coordonnées de contact de l'entreprise, sans backend, base de données ni CMS — tout le contenu est codé en dur dans les composants (sauf les données de projets, centralisées dans `src/data/projects.ts`).

- **Cible** : clients en Afrique francophone et à l'international cherchant des assistants IA, chatbots, plateformes web, e-commerce ou cybersécurité.
- **Type de site** : marketing, statique. Page d'accueil one-page (`/`) + une page de détail par projet (`/projets/[slug]`, générée statiquement).
- **Langue** : français (`lang="fr"` dans `layout.tsx`).

## 2. Stack technique

| Outil | Rôle |
|---|---|
| Next.js 14 (App Router) | Framework React, rendu serveur par défaut |
| TypeScript | Typage statique |
| Tailwind CSS | Styling utilitaire |
| Framer Motion | Animations au scroll et au chargement |
| ESLint (`next/core-web-vitals`, `next/typescript`) | Linting |
| Geist (local via `next/font/local`) | Police de caractères |

Aucune base de données, aucune API externe, aucun gestionnaire d'état global.

## 3. Structure du projet

```
src/
  app/
    layout.tsx           → squelette HTML, chargement des polices, métadonnées SEO
    page.tsx              → assemble les sections de la page d'accueil dans l'ordre d'affichage
    globals.css           → variables CSS (couleurs), animations CSS (starfield)
    fonts/                → fichiers de police Geist (.woff)
    projets/[slug]/
      page.tsx            → page de détail d'un projet (statique, via generateStaticParams)
  components/
    Navbar.tsx            → navigation fixe, change d'apparence au scroll
    Hero.tsx               → section d'accueil plein écran
    Services.tsx           → grille des 6 services proposés
    WhyUs.tsx               → 3 arguments différenciants (statistiques)
    Projects.tsx            → grille des réalisations/projets (lit src/data/projects.ts)
    Contact.tsx              → appel à l'action + email de contact
    Footer.tsx                → mentions légales, copyright
    VideoBackground.tsx        → fond vidéo en boucle avec overlay, utilisé par Hero/WhyUs/Contact
  data/
    projects.ts           → source unique de vérité des projets (type Project + tableau projects)
docs/
  PROJET.md            → ce fichier
  projets/             → un fichier markdown de référence par projet (stack, fonctionnalités, architecture)
CLAUDE.md              → instructions pour Claude Code (commandes, architecture)
```

Chaque composant de section :
- est **autonome** : son contenu (textes, listes de services) est défini en haut du fichier sous forme de tableau JS, pas tiré d'une source externe — exception : `Projects.tsx` et `/projets/[slug]` lisent tous les deux `src/data/projects.ts` ;
- possède un `id` HTML (`#services`, `#pourquoi`, `#realisations`, `#contact`) utilisé par les ancres de navigation ;
- est rendu dans `page.tsx` dans un ordre fixe : `Navbar → Hero → Services → WhyUs → Projects → Contact → Footer`.

### Données de projets (`src/data/projects.ts`)

Chaque projet est un objet `Project` avec :
- `summary` / `description` : résumé (carte) et paragraphe complet (page de détail) ;
- `stack` : liste de tags technologiques ;
- `features` (optionnel) : liste de fonctionnalités clés, affichée sur la page de détail ;
- `pages` (optionnel) : liste `{ name, description }` des pages/vues du projet, affichée en grille sur la page de détail ;
- `architecture` (optionnel) : arborescence technique en texte brut, affichée dans un bloc `<pre>` ;
- `externalHref` / `externalLabel` : lien vers la démo/le site en ligne ;
- `repoHref` (optionnel) : lien vers le dépôt GitHub, affiché comme bouton « Voir le code » distinct du lien démo.

Le détail technique (stack précise, fonctionnalités, architecture) provient des dépôts GitHub ou du code source réel de chaque projet quand il est disponible — voir `docs/projets/<slug>.md` pour le détail brut sans mise en forme marketing.

## 4. Construction et choix de conception

### 4.1 Direction artistique : inspiration SpaceX

Le site a été conçu pour adopter l'esthétique de spacex.com :
- **Fond noir** (`--background: #050505`) et texte clair (`--foreground: #f2f2f2`), définis comme variables CSS dans `globals.css` et exposés via Tailwind (`tailwind.config.ts`).
- **Une seule couleur d'accent** (`--accent: #3b82f6`, bleu) utilisée avec parcimonie sur les CTA, tags et statistiques — pour éviter le bruit visuel d'une palette multicolore.
- **Typographie massive et en majuscules** : titres en `font-black`/`font-bold`, `uppercase`, avec un tracking large via l'utilitaire `tracking-widest-plus` (`letter-spacing: 0.25em`) défini dans `globals.css`.
- **Sections plein écran** pour le Hero, la section "Pourquoi nous" et la section Contact (`min-h-screen` / `h-screen`), pour reproduire le défilement "un écran = un message" de SpaceX.
- **Fond animé du Hero** : un champ d'étoiles généré en pur CSS (classe `.starfield`, keyframe `drift` dans `globals.css`) plutôt qu'une vidéo/image, pour rester léger sans asset lourd à charger.

### 4.2 Navigation

`Navbar.tsx` est un composant client (`"use client"`) car il écoute le scroll (`window.scrollY`) via `useEffect`/`useState` pour basculer entre :
- transparent en haut de page,
- `bg-black/80 backdrop-blur-md` après 40px de scroll.

### 4.3 Animations

Toutes les sections utilisent `framer-motion` :
- Le Hero anime ses éléments à l'arrivée sur la page (`initial`/`animate`).
- Les autres sections utilisent `whileInView` avec `viewport={{ once: true }}` pour déclencher un fondu/translation lors de l'entrée dans le viewport au scroll, avec un léger décalage (`delay`) entre les éléments d'une même grille pour un effet de cascade.

Tout composant utilisant `framer-motion` ou des hooks de scroll doit être marqué `"use client"`, le reste de l'arbre (layout, page) restant rendu côté serveur par défaut (App Router).

### 4.4 Accessibilité et SEO

- Métadonnées (`title`, `description`) définies dans `layout.tsx`.
- Liens d'ancrage sémantiques entre la navbar et les sections.
- Contraste fort (texte clair sur fond noir) cohérent avec le thème.

## 5. Modifier le contenu

Pour changer un texte, ajouter/retirer un service ou un projet : éditer directement le tableau de données en haut du composant concerné (`services` dans `Services.tsx`, `projects` dans `Projects.tsx`, `points` dans `WhyUs.tsx`). Aucune base de données ni fichier de configuration externe à toucher.

## 6. Commandes utiles

```bash
npm run dev          # serveur de développement (http://localhost:3000)
npm run build         # build de production (inclut type-check + lint)
npm run start         # sert le build de production
npm run lint          # ESLint
npx tsc --noEmit      # vérification des types seule
```

Il n'y a pas de suite de tests dans ce projet.

## 7. Pistes d'amélioration futures

- Brancher un vrai formulaire de contact (actuellement un simple lien `mailto:`).
- Ajouter de vraies captures d'écran/démos pour Vertex Shop, Transport Agency, Ticketing Platform et Cyber Content Generator (actuellement des SVG placeholders pour certains).
- Retrouver/publier un dépôt GitHub pour Transport Agency, Ticketing Platform et Cyber Content Generator afin d'afficher un bouton « Voir le code » comme pour Theamah+ et Amah Agent.
