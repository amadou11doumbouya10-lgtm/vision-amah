# CampusMarket Guinée

Marketplace des étudiants et des petits vendeurs de Conakry. Le nom est provisoire.

- **Site en ligne (version de test)** : https://campusmarket-nu.vercel.app
- **Repo GitHub** : `amadou11doumbouya10-lgtm/campusmarket` (privé, pas de bouton « Voir le code »)

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- Supabase : Postgres avec Row Level Security, Auth, Storage
- Zod pour la validation côté serveur
- Hébergement Vercel

## Fonctionnalités clés

- Catalogue consultable sans compte : recherche, filtres par catégorie, fiches produit, annuaire et pages publiques des boutiques
- Contact du vendeur sur WhatsApp (message pré-rempli) ou par appel. **Pas de messagerie intégrée ni de paiement en ligne** : le paiement et la livraison se décident entre l'acheteur et le vendeur
- Candidature vendeur vérifiée par l'équipe avant toute publication
- Espace vendeur (produits, logo, couverture) et espace administrateur (candidatures, vendeurs, produits signalés, mise en avant, historique)
- Pensé pour le smartphone et les connexions lentes

## Notes

- En version de test : les produits de démonstration sont fictifs et marqués « Démo » sur le site. Toute reprise de ces produits (maquette du hero, captures) doit garder ce badge.
- La capture `public/projects/campusmarket-boutique-demo.jpg` est la page de la boutique de démonstration « Campus Tech » du site en ligne, prise le 31/10/2026 : elle ne montre que des produits « Démo », pas ceux de vrais vendeurs.
