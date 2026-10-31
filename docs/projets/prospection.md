# Vision Amah Prospection

Outil interne de prospection : trouve sur OpenStreetMap les commerces de Conakry (ou d'une autre ville) qui ont un téléphone mais pas de site web, et prépare pour chacun un message WhatsApp et une page de démo personnalisés.

- **Repo GitHub** : `amadou11doumbouya10-lgtm/vision-amah-prospection` (public). **Pas de bouton « Voir le code » sur le site** tant que le dépôt contient `prospects_99_conakry.csv` (99 commerces réels avec leurs numéros) et le classeur de suivi de prospection : les retirer du dépôt avant d'ajouter `repoHref` dans `projects.ts`.
- Copie locale : `Desktop/Projets/Programme de prospect maps/`.

## Stack

- Python : `requests` (API Overpass d'OpenStreetMap), `fpdf2` (PDF), `openpyxl` (journal Excel)
- Tâche planifiée Windows pour la relance hebdomadaire (`lancer_hebdo.bat`)

## Fonctionnalités clés

- Recherche des commerces sans site web via Overpass, nettoyage et dédoublonnage
- Classement par secteur, qui adapte le message et la mise en page de la démo
- Une page de démo HTML par commerce, avec sa vraie photo ou son vrai menu quand OpenStreetMap en référence
- Exports CSV et PDF, page de suivi interactive (filtres, statuts, relances, statistiques)
- **Aucun envoi automatisé** : les messages WhatsApp partent à la main (risque de bannissement du numéro)

## Notes

- Visuel du site : `public/projects/prospection.svg`, illustration originale (carte, repères, téléphone), sans texte ni données de vrais commerces. Une capture de l'outil montrerait des noms et numéros réels : ne pas en utiliser.
