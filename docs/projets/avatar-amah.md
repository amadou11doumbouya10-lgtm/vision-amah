# Avatar Amah (« The Amah »)

Chatbot IA public avec une persona minimaliste, ambassadrice de l'univers Theamah+.

- **Live** : https://legendary-selkie-d298b7.netlify.app
- **Repo GitHub** : https://github.com/amadou11doumbouya10-lgtm/amah-avatar

## Stack

- JavaScript vanilla, HTML/CSS (aucun framework)
- API Anthropic — modèle `claude-sonnet-4-6`
- Netlify Functions (proxy serverless) + Netlify (hébergement)

## Fonctionnement

```
Visiteur → index.html → POST /.netlify/functions/chat → API Anthropic
```

La clé API n'est jamais exposée côté client : elle est stockée comme variable d'environnement Netlify et utilisée uniquement par la fonction serverless. Limitation : 30 requêtes / heure / IP.

## Fonctionnalités

- Persona « The Amah » : réponses courtes, denses, élégantes — jamais de liste, jamais de « Bonjour ! »
- Widget flottant intégré directement dans `theamah-streaming.html` (Theamah+ et Avatar Amah restent deux projets indépendants, reliés par cet appel d'API)
- Effet machine à écrire, boutons de suggestion, compteur de messages, reset de conversation
- Dashboard admin protégé (mot de passe) : statistiques, sujets abordés, historique des conversations, export

## Notes

- Aucun mot de passe admin ni clé API n'est documenté ici — la configuration reste gérée via variables d'environnement Netlify et hors dépôt.
- Pistes connues : vraie image d'avatar générée par IA, mémoire visiteur entre sessions, détection automatique de langue, voix (ElevenLabs).
