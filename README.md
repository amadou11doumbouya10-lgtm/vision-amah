# Vision Amah — Site vitrine

Site marketing pour **Vision Amah**, société de solutions informatiques et IA basée à Conakry, Guinée.

## Stack

- **Next.js 14** (App Router) — rendu statique, pas de backend
- **TypeScript** — typage statique complet
- **Tailwind CSS** — design system dark/minimaliste
- **Framer Motion** — animations au scroll
- **Geist** — police locale (next/font)

## Structure

```
src/
  app/
    page.tsx                 → page d'accueil one-page
    projets/[slug]/page.tsx  → page de détail par projet (statique)
  components/                → sections de la page : Navbar, Hero, Services, WhyUs, Projects, Contact, Footer
  data/
    projects.ts              → source unique de vérité des projets
public/
  video/                     → vidéos de fond (Hero, WhyUs, Contact)
  projects/                  → captures et placeholders des projets
docs/
  PROJET.md                  → documentation technique complète (FR)
  projets/                   → fiche de référence par projet
```

## Commandes

```bash
npm install          # installer les dépendances
npm run dev          # serveur de développement → http://localhost:3000
npm run build        # build de production (type-check + lint inclus)
npm run start        # servir le build de production
npm run lint         # ESLint
npx tsc --noEmit     # vérification des types seule
```

## Projets présentés

| Projet | Technologie |
|---|---|
| Theamah+ | Next.js, Streaming TMDB |
| Amah Agent | Python, Groq, Gemini Live |
| Vertex Shop | Shopify |
| Transport Agency | Next.js, Prisma, PostgreSQL |
| Avatar Amah | Claude Sonnet, Netlify Functions |
| Ticketing Platform | HTML/CSS/JS |
| Cyber Content Generator | Python, TikTok API |

## Widget Avatar Amah

Un chatbot IA flottant (Avatar Amah) est intégré sur toutes les pages via une iframe vers le déploiement Netlify dédié. Le widget s'affiche en bas à droite et ne nécessite aucune clé API dans ce dépôt.

## Déploiement

Site statique — compatible Netlify, Vercel ou tout hébergeur supportant Next.js.

---

Développé par [Vision Amah](https://github.com/amadou11doumbouya10-lgtm) · Conakry, Guinée
