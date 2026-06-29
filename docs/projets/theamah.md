# Theamah+

Plateforme de streaming vidéo type Netflix, entièrement côté client (HTML/CSS/JavaScript vanilla) — aucun backend, aucun bundler, aucune dépendance npm.

- **Site en ligne** : https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/
- **Repo GitHub** : https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming

## Stack

- JavaScript vanilla, HTML/CSS
- API TMDB (catalogue de 600 000+ films/séries, fiches détaillées, recherche)
- PWA (manifest + service worker, installable, navigation hors-ligne)
- Stockage local : `localStorage` (comptes, favoris, historique) + `IndexedDB` (vidéos/sous-titres locaux)

## Fonctionnalités clés

- Recherche et navigation dans le catalogue TMDB, sections films/séries français
- Comptes utilisateurs (mots de passe hashés), mode invité
- Favoris, historique de visionnage avec reprise de lecture, notation personnelle
- Lecteur vidéo avec sous-titres SRT/VTT, raccourcis clavier, plein écran, picture-in-picture
- Lecture de contenus locaux et lecture via lecteur embed avec bascule automatique de source en cas d'indisponibilité
- Auto-play de l'épisode suivant, recommandations « titres similaires »
- Partage direct d'un titre par lien (hash routing)
- Mode clair/sombre, vue liste/grille, page d'aide intégrée

## Notes

- Conçu et itéré sur plusieurs sessions de développement, avec un audit de sécurité (échappement HTML, sandboxing des iframes, CSP, limitation des tentatives de connexion).
- Aucune information sensible (clé admin, identifiants) n'est documentée ici — elle reste gérée hors dépôt.
