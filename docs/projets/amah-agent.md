# Amah Agent

Assistant IA installé localement sur Windows, piloté à l'écrit ou à la voix en français.

- **Repo GitHub** : https://github.com/amadou11doumbouya10-lgtm/amah-agent

## Stack

- Python 3.13
- Groq API — `llama-3.3-70b-versatile` (tâches complexes) / `llama-3.1-8b-instant` (questions simples)
- Gemini 2.5 Flash (native-audio) — mode vocal temps réel (« Mode Live »)
- Groq `llama-4-scout` — vision IA (analyse d'écran et de webcam)
- Interface graphique : Python tkinter
- Mémoire : SQLite (conversations, mémoire explicite, statistiques d'usage)
- Navigateur : Playwright + Edge/Chromium, profil persistant
- Packaging : PyInstaller → exécutable Windows standalone

## Fonctionnalités clés (99 outils)

- Fichiers, documents (Word/PDF/TXT), Excel, archives ZIP, presse-papiers
- Email Gmail (lecture, envoi, recherche, brouillons)
- Navigateur web avec navigation par texte visible (sans sélecteur CSS), captures d'écran
- Interface vocale HUD animée + mot de réveil « Amah » (détection Levenshtein)
- Mode Live Gemini (touche F9) : conversation orale temps réel avec interruption naturelle
- Planification multi-étapes (génération et exécution automatique d'un plan, avec confirmation pour les actions sensibles)
- Automatisation système (volume, luminosité, Wi-Fi), notifications, planificateur Windows
- Lancement de jeux (Steam/Epic Games), météo, traduction (100+ langues), vols (Google Flights)
- Licence offline liée au matériel (fail-closed)

## Notes

- Le code source est partagé à titre de portfolio sous licence propriétaire.
- Aucun identifiant, clé API ou secret n'est documenté ici — la configuration reste gérée via `.env` hors dépôt.
