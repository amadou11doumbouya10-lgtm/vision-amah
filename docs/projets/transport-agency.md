# Transport Agency (ATI Transport)

Site full-stack bilingue (FR/DE) pour une agence de transport de colis entre l'Allemagne et l'Afrique de l'Ouest (Guinée, Côte d'Ivoire, Sénégal, Mali, etc.).

## Stack

- Next.js 14 (App Router, TypeScript)
- PostgreSQL via Prisma ORM v5 (hébergé sur Neon, région Frankfurt)
- NextAuth.js v4 (authentification admin, JWT)
- PDFKit (génération de PDF en mémoire) + `qrcode`
- Nodemailer (notifications email)
- Tailwind CSS, Framer Motion, Recharts (dashboard), date-fns

## Fonctionnalités clés

- Site public : accueil, calculateur de tarifs, suivi de colis par code, formulaire de contact
- Dashboard administrateur protégé : KPIs, gestion des colis (CRUD), groupes d'expédition, gestion des tarifs
- Génération automatique de bons de retrait PDF avec QR code à l'arrivée du colis au dépôt
- Notifications email automatiques à chaque changement de statut (expédié, arrivé au dépôt, livré)
- Timeline de suivi : `RECU → EN_GROUPAGE → EXPEDIE → EN_TRANSIT → ARRIVE_DEPOT → LIVRE`
- Code colis généré automatiquement au format `ATI-{ANNÉE}-{5 chiffres}`

## Architecture

```
app/(public)/   → site public (Navbar + Footer)
app/admin/      → dashboard protégé NextAuth
app/api/        → routes REST (colis, expéditions, tarifs, stats, auth)
lib/            → auth, client Prisma singleton, génération PDF, envoi email
prisma/         → schéma (Colis, Expedition, Tarif, ColisCounter) + seed
```

## Notes

- Aucun identifiant admin, secret NextAuth ou mot de passe SMTP n'est documenté ici — la configuration reste gérée via `.env` hors dépôt.
