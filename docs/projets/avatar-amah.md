# Avatar Amah (« The Amah »)

Chatbot IA public et commercial de Vision Amah, à la persona minimaliste. Il répond dans la bulle de discussion du site Vision Amah et en widget dans Theamah+.

- **Live** : https://legendary-selkie-d298b7.netlify.app
- **Repo GitHub** : https://github.com/amadou11doumbouya10-lgtm/amah-avatar

## Stack

- JavaScript vanilla, HTML/CSS (aucun framework)
- API Groq — modèle `openai/gpt-oss-120b` (Llama 3.3 70B avant le 16/08/2026, voir l'article du blog)
- Netlify Functions (proxy serverless) + Netlify (hébergement)

## Fonctionnement

```
Visiteur → index.html → POST /.netlify/functions/chat → API Groq
```

La clé API n'est jamais exposée côté client : elle est stockée comme variable d'environnement Netlify et utilisée uniquement par la fonction serverless. Limitation : 30 requêtes / heure / IP.

## Fonctionnalités

- Persona « The Amah » : réponses courtes, denses, élégantes — jamais de liste, jamais de « Bonjour ! »
- Rôle commercial : cerner le besoin du visiteur, citer une réalisation Vision Amah proche, proposer un contact
- Chargé en bulle sur le site Vision Amah (`AvatarAmahWidget.tsx`) et appelé par le widget de Theamah+
- Effet machine à écrire, suggestions de démarrage, 20 messages par conversation, prénom du visiteur retenu, nouvelle conversation

## Notes

- Le tableau de bord admin a été retiré du dépôt le 28/10/2026.
- Le README du dépôt mentionne encore l'API Anthropic (Claude) : il date d'avant le passage à Groq, le code (`netlify/functions/chat.js`) fait foi.
- La capture `public/projects/avatar-amah-capture.jpg` est l'écran du chatbot en ligne, prise le 30/10/2026.
- Aucun mot de passe ni clé API n'est documenté ici — la configuration reste gérée via variables d'environnement Netlify et hors dépôt.
