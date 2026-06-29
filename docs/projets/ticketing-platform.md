# TicketFlow (Ticketing Platform)

Maquette interactive complète d'une plateforme de billetterie en ligne, en une seule page HTML/CSS/JavaScript (sans rechargement, sans backend).

## Stack

- HTML/CSS/JavaScript (fichier unique)
- QR codes générés en SVG

## Pages / vues

| Page | Description |
|---|---|
| Accueil | Hero animé, ticker, grille d'événements avec filtres par catégorie (Concerts, Sport, Cinéma, Festivals) |
| Réservation | Détail de l'événement, plan de salle, sélection de billets, récapitulatif avec total recalculé en temps réel |
| Mes Billets | Billets avec QR codes SVG |
| Back Office | Dashboard KPIs + tableau des dernières commandes |

## Fonctionnalités

- Filtres d'événements fonctionnels par catégorie
- Recalcul dynamique du sous-total, des frais et du total
- Confirmation de paiement simulée (overlay animé avant redirection)
- Modal connexion / inscription avec bascule entre formulaires
- Responsive mobile complet (grilles adaptatives, menu hamburger)
- Notifications toast réutilisables

## État actuel et prochaines étapes

- Démonstration frontend uniquement : **aucune intégration de paiement réelle** (Stripe) ni backend pour le moment.
- Pistes : intégration Stripe réelle, tri des événements, back-office fonctionnel, recherche, accessibilité (focus, aria-labels).
