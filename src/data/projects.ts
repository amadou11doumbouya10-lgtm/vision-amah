export type Project = {
  slug: string;
  name: string;
  tag: string;
  summary: string;
  description: string;
  stack: string[];
  features?: string[];
  pages?: { name: string; description: string }[];
  architecture?: string;
  externalHref?: string;
  externalLabel?: string;
  repoHref?: string;
  image: string;
  video?: string;
  fit?: "contain" | "cover";
};

export const projects: Project[] = [
  {
    slug: "theamah",
    name: "Theamah+",
    tag: "Streaming",
    summary:
      "Plateforme de streaming type Netflix, 100% côté client, avec l'API TMDB (600 000+ titres), sous-titres SRT/VTT et mode PWA.",
    description:
      "Theamah+ est une plateforme de streaming inspirée de Netflix, entièrement développée côté client en JavaScript vanilla — aucun backend, aucun build. Elle s'appuie sur l'API TMDB pour donner accès à un catalogue de plus de 600 000 films et séries, avec recherche, fiches détaillées, sous-titres SRT/VTT et lecture vidéo avec bascule automatique de source en cas d'indisponibilité. Comptes utilisateurs, favoris, historique de visionnage, notation et partage de lien direct complètent l'expérience. Installable en PWA, elle reste navigable hors-ligne et s'adapte à tous les écrans.",
    stack: ["JavaScript", "API TMDB", "PWA", "HTML/CSS"],
    features: [
      "Catalogue TMDB de 600 000+ films et séries, recherche et fiches détaillées",
      "Comptes utilisateurs (mots de passe hashés), mode invité, favoris et historique avec reprise de lecture",
      "Sous-titres SRT/VTT, raccourcis clavier, plein écran et picture-in-picture",
      "Lecture locale ou via lecteur embed avec bascule automatique en cas de source indisponible",
      "Partage direct d'un titre par lien, recommandations de titres similaires",
      "PWA installable, navigable hors-ligne, mode clair/sombre",
    ],
    pages: [
      { name: "Accueil", description: "Hero aléatoire, sections tendances et nouveautés" },
      { name: "Catalogue", description: "Recherche et filtres dans les 600 000+ titres TMDB" },
      { name: "Ma Bibliothèque", description: "Films/séries ajoutés, vue liste ou grille" },
      { name: "Favoris", description: "Titres favoris et à regarder plus tard" },
      { name: "Recherche", description: "Recherche avec historique des 5 dernières requêtes" },
    ],
    externalHref: "https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/",
    externalLabel: "Voir le site",
    repoHref: "https://github.com/amadou11doumbouya10-lgtm/-theamah-streaming",
    image: "/projects/theamah.png",
    video: "/video/projects/theamah.mp4",
  },
  {
    slug: "amah-agent",
    name: "Amah Agent",
    tag: "Intelligence artificielle",
    summary:
      "Assistant IA local pour Windows avec 99 outils intégrés (fichiers, email, navigateur, Excel, voix), mémoire SQLite persistante.",
    description:
      "Amah Agent est un assistant IA installé localement sur un PC Windows, propulsé par Groq (Llama 3.3) pour le raisonnement et Gemini Live pour la conversation vocale temps réel. Il dispose de 99 outils intégrés — fichiers, emails Gmail, navigateur avec profil persistant, Excel, vision par IA, planification multi-étapes — pilotables à l'écrit comme à la voix avec mot de réveil dédié. Sa mémoire persistante en SQLite lui permet de se souvenir du contexte entre les sessions, et une licence offline liée au matériel sécurise la distribution. Packagé en exécutable Windows autonome, il automatise des tâches métier répétitives sans dépendre du cloud pour l'essentiel de son fonctionnement.",
    stack: ["Python", "Groq / Llama 3.3", "Gemini Live", "SQLite"],
    features: [
      "99 outils : fichiers, documents, Excel, email Gmail, navigateur, vision IA, automatisation système",
      "Interface vocale HUD avec mot de réveil « Amah » et Mode Live Gemini (conversation orale temps réel, touche F9)",
      "Navigateur Playwright avec profil persistant, navigation par texte visible sans sélecteur CSS",
      "Planification multi-étapes : génération et exécution automatique d'un plan, avec confirmation pour les actions sensibles",
      "Mémoire persistante SQLite (conversations, mémoire explicite, statistiques d'usage)",
      "Licence offline liée au matériel, packagé en exécutable Windows standalone",
    ],
    architecture:
      "gui.py                  → Interface graphique (chat + HUD)\nvoice_fullscreen.py     → Interface vocale HUD plein écran (+ Mode Live)\nagent.py                → Interface terminal\nconfig.py               → 99 définitions d'outils\ngroq_client.py          → Client Groq (rotation de clés, retry)\ngemini_client.py        → Session Gemini Live (pont audio temps réel)\ntools/                  → 30+ modules d'outils (fichiers, email, navigateur, Excel...)",
    externalHref: "https://github.com/amadou11doumbouya10-lgtm/amah-agent",
    externalLabel: "Voir le code",
    image: "/projects/amah-agent.png",
    video: "/video/projects/amah-agent.mp4",
  },
  {
    slug: "vertex-shop",
    name: "Vertex Shop",
    tag: "E-commerce",
    summary: "Boutique e-commerce de soins de luxe, sur Shopify avec thème Liquid personnalisé.",
    description:
      "Vertex Shop est une boutique e-commerce dédiée aux soins de la peau haut de gamme (sérums à la vitamine C), construite sur Shopify avec un thème Liquid personnalisé autour de l'identité de marque « Glow Different » — palette noir, or et orange. L'intervention couvre la fiche produit, le tunnel d'achat, le référencement et l'habillage visuel pour refléter le positionnement premium de la boutique.",
    stack: ["Shopify", "Liquid", "HTML/CSS"],
    features: [
      "SEO de la page d'accueil (titre, méta-description) et balises Open Graph",
      "Page produit enrichie : bénéfices, ingrédients actifs, mode d'emploi en bullet points",
      "Habillage visuel sur-mesure : palette noir/or/orange, typographie Cormorant Garamond",
      "Page d'accueil avec hero, argumentaire de marque et témoignages clients",
      "Optimisation des images pour un chargement rapide",
    ],
    pages: [
      { name: "Accueil", description: "Hero, argumentaire de marque, témoignages clients" },
      { name: "Page produit", description: "Bénéfices, ingrédients actifs, mode d'emploi" },
    ],
    image: "/projects/vertex-shop.jpeg",
    fit: "contain",
  },
  {
    slug: "transport-agency",
    name: "Transport Agency",
    tag: "Logistique",
    summary:
      "Plateforme de gestion de fret Allemagne → Afrique, développée avec Next.js, Prisma et PostgreSQL.",
    description:
      "Cette plateforme bilingue (français/allemand) accompagne une agence de transport de fret entre l'Allemagne et l'Afrique de l'Ouest. Elle combine un site public (tarifs, suivi de colis, contact) et un dashboard administrateur protégé, avec génération automatique de bons de retrait PDF (QR code inclus) et notifications email à chaque changement de statut du colis. La base de données PostgreSQL centralise colis, expéditions et tarifs pour fiabiliser le suivi logistique de bout en bout.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    features: [
      "Site public bilingue FR/DE : accueil, calculateur de tarifs, suivi de colis par code, contact",
      "Dashboard administrateur protégé : KPIs, gestion des colis (CRUD), groupes d'expédition, tarifs",
      "Génération automatique de bons de retrait PDF avec QR code à l'arrivée au dépôt",
      "Notifications email automatiques à chaque changement de statut du colis",
      "Timeline de suivi : reçu → en groupage → expédié → en transit → arrivé au dépôt → livré",
      "Code colis généré automatiquement (format ATI-{année}-{5 chiffres})",
    ],
    pages: [
      { name: "Accueil", description: "Présentation de l'agence" },
      { name: "Tarifs", description: "Calculateur et tableau des tarifs par pays" },
      { name: "Suivi", description: "Timeline de suivi d'un colis par code" },
      { name: "Contact", description: "Formulaire et adresses des agences" },
      { name: "Dashboard admin", description: "KPIs et graphiques (Recharts)" },
      { name: "Gestion des colis", description: "CRUD colis, génération de bons de retrait PDF" },
    ],
    architecture:
      "app/(public)/    → site public (accueil, tarifs, suivi, contact)\napp/admin/       → dashboard protégé (KPIs, colis, expéditions)\napp/api/         → routes REST (colis, expéditions, tarifs, stats, auth)\nlib/             → auth, client Prisma, génération PDF, envoi email\nprisma/          → schéma (Colis, Expedition, Tarif, ColisCounter) + seed",
    image: "/projects/transport-agency.svg",
  },
  {
    slug: "avatar-amah",
    name: "Avatar Amah",
    tag: "Intelligence artificielle",
    summary:
      "Chatbot IA public à la persona élégante et minimaliste, ambassadrice de Theamah+, avec dashboard admin de surveillance.",
    description:
      "Avatar Amah (« The Amah ») est un chatbot IA public propulsé par Claude Sonnet 4.6, intégré comme widget flottant dans Theamah+. Sa persona est volontairement courte, dense et mystérieuse — jamais de listes, jamais de formules de politesse — et reste centrée sur le streaming, la tech, l'IA et la cybersécurité. Une fonction serverless Netlify fait office de proxy pour ne jamais exposer la clé API côté client, avec limitation du nombre de requêtes par visiteur. Un dashboard admin protégé permet de suivre les conversations, les sujets abordés et les statistiques d'usage.",
    stack: ["JavaScript", "API Anthropic (Claude)", "Netlify Functions", "HTML/CSS"],
    features: [
      "Persona « The Amah » : réponses courtes, élégantes, jamais de listes ni de salutations",
      "Widget flottant intégré directement dans Theamah+",
      "Clé API jamais exposée côté client — proxy via fonction serverless Netlify",
      "Limitation des requêtes par visiteur (anti-abus)",
      "Effet machine à écrire, suggestions de démarrage, compteur de messages",
      "Dashboard admin protégé : historique des conversations, statistiques, export",
    ],
    pages: [
      { name: "Chatbot public", description: "Widget conversationnel pour les visiteurs (index.html)" },
      { name: "Dashboard admin", description: "Suivi des conversations et statistiques, accès protégé" },
    ],
    architecture:
      "index.html              → Chatbot public (persona, UI, logique conversation)\nadmin.html              → Dashboard admin protégé (stats, historique, export)\nnetlify/functions/\n  chat.js               → Proxy serverless vers l'API Anthropic (clé cachée)\nnetlify.toml            → Configuration de déploiement Netlify",
    externalHref: "https://legendary-selkie-d298b7.netlify.app",
    externalLabel: "Voir le site",
    repoHref: "https://github.com/amadou11doumbouya10-lgtm/amah-avatar",
    image: "/projects/avatar-amah.svg",
  },
  {
    slug: "ticketing-platform",
    name: "Ticketing Platform",
    tag: "Billetterie",
    summary:
      "Maquette interactive complète d'une billetterie en ligne (TicketFlow) : catalogue d'événements, réservation, billets à QR code et back-office.",
    description:
      "TicketFlow est une maquette interactive complète d'une billetterie en ligne, développée en une seule page sans rechargement. Elle couvre le parcours utilisateur de bout en bout : catalogue d'événements filtrable, réservation avec plan de salle et récapitulatif de commande en temps réel, billets personnels avec QR codes, et back-office avec indicateurs clés. Pensée comme base de démonstration, elle est prête à être branchée à un vrai moteur de paiement et à un backend pour passer en production.",
    stack: ["HTML/CSS", "JavaScript", "QR Code"],
    features: [
      "Catalogue d'événements filtrable par catégorie (concerts, sport, cinéma, festivals)",
      "Réservation avec plan de salle et récapitulatif de commande recalculé en temps réel",
      "Billets personnels avec QR codes SVG",
      "Back-office avec indicateurs clés (KPIs) et tableau des dernières commandes",
      "Responsive mobile complet, modal connexion/inscription, notifications toast",
      "Démonstration frontend — prête à être branchée à un vrai moteur de paiement et un backend",
    ],
    pages: [
      { name: "Accueil", description: "Hero animé, grille d'événements avec filtres" },
      { name: "Réservation", description: "Plan de salle, sélection de billets, récapitulatif en temps réel" },
      { name: "Mes Billets", description: "Billets personnels avec QR codes SVG" },
      { name: "Back Office", description: "Dashboard KPIs et tableau des commandes" },
    ],
    image: "/projects/ticketing-platform.svg",
  },
  {
    slug: "cyber-content-generator",
    name: "Cyber Content Generator",
    tag: "Cybersécurité",
    summary:
      "Générateur de scripts de sensibilisation cybersécurité en français pour TikTok/Instagram, propulsé par l'API Anthropic.",
    description:
      "Cet outil génère des scripts de sensibilisation à la cybersécurité en français, calibrés pour des formats courts type TikTok ou Instagram Reels, avec deux tons distincts par sujet : fun/viral et sérieux/éducatif. Il s'appuie sur l'API Anthropic (Claude) en streaming pour générer de nouveaux sujets à la demande, et produit des plans de publication sur plusieurs jours avec hashtags stratégiques adaptés à chaque ton.",
    stack: ["API Anthropic", "Python"],
    features: [
      "Deux tons par sujet : fun/viral et sérieux/éducatif, avec accroche, points clés et CTA dédiés",
      "Génération de nouveaux sujets à la demande via l'API Anthropic (streaming, prompt caching)",
      "Plans de publication sur plusieurs jours (3 posts/jour) avec rotation automatique des sujets",
      "Stratégie de hashtags différenciée par ton (engagement vs niche technique)",
      "Export en fichiers individuels ou en plan structuré (JSON/texte)",
    ],
    architecture:
      "topics.py              → Sujets statiques + sujets générés par IA\nai_topic_generator.py  → Génération de nouveaux sujets (Claude, streaming)\nscript_generator.py    → Mise en forme du script (ton fun / sérieux)\nhashtags.py            → Stratégie de hashtags par ton\nbatch_export.py        → Génération de plans de publication multi-jours",
    image: "/projects/cyber-content-generator.svg",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
