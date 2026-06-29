# Cyber Content Generator

Générateur de contenu TikTok/Instagram sur la cybersécurité pour un public francophone : scripts, légendes et hashtags.

## Stack

- Python
- API Anthropic (Claude), génération en streaming avec mise en cache de prompt

## Fonctionnalités clés

- Deux tons par sujet : **fun/viral** et **sérieux/éducatif**, avec accroche, points clés, punchline/CTA et émojis dédiés à chaque ton
- Génération de nouveaux sujets à la demande via l'API Anthropic (streaming, prompt caching)
- Génération de plans de publication sur plusieurs jours (3 posts/jour : matin/après-midi/soir), avec rotation des sujets par créneau
- Stratégie de hashtags différenciée par ton (engagement pour le fun, niche technique pour le sérieux)
- Export en fichiers individuels par post ou en plan structuré (JSON/texte)

## Notes

- La génération de nouveaux sujets nécessite une clé API Anthropic (variable d'environnement) ; toutes les autres fonctionnalités fonctionnent hors-ligne avec les sujets déjà définis.
