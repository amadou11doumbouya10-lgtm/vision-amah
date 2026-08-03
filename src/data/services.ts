export type Service = {
  slug: string;
  title: string;
  category: string;
  tag: string;
  summary: string;
  description: string;
  included: string[];
  image: string;
  relatedProjectSlugs?: string[];
  /** Toujours accessible via /services/[slug], mais absent de la grille de l'accueil. */
  hiddenFromHome?: boolean;
};

export const CATEGORIES = [
  "Automatisation & IA",
  "Sites & Boutiques en ligne",
  "Design & Marketing",
  "Applications & Sécurité sur mesure",
] as const;

export const services: Service[] = [
  {
    slug: "automatisation-ia",
    title: "Assistants IA & Automatisation",
    category: "Automatisation & IA",
    tag: "Automatisation",
    summary:
      "Automatisez vos tâches administratives répétitives grâce à l'IA — lecture de documents, remplissage de fichiers, rédaction, navigation web.",
    description:
      "Votre assistant IA prend en charge les tâches répétitives qui vous font perdre du temps : lire vos PDF, remplir vos fichiers Excel, rédiger vos emails ou naviguer sur le web à votre place. On commence toujours par un audit gratuit de 30 minutes pour identifier précisément ce qui peut être automatisé dans votre activité, avant de construire quoi que ce soit.",
    included: [
      "Analyse de vos tâches répétitives lors de l'audit gratuit",
      "Assistant capable de lire vos PDF et remplir vos fichiers Excel",
      "Rédaction automatique d'emails et de documents",
      "Navigation web automatisée pour les tâches en ligne",
      "Formation à l'utilisation, sans jargon technique",
    ],
    image: "/services/automatisation.svg",
    relatedProjectSlugs: ["amah-agent"],
  },
  {
    slug: "chatbots",
    title: "Chatbots & Avatars conversationnels",
    category: "Automatisation & IA",
    tag: "Automatisation",
    summary:
      "Un assistant disponible 24h/24 qui répond à vos clients, qualifie vos prospects et prend des rendez-vous.",
    description:
      "Un chatbot intégré à votre site ou vos réseaux répond à vos clients même en dehors de vos heures d'ouverture, qualifie les demandes sérieuses et peut prendre des rendez-vous automatiquement. Personnalisé à votre activité et à votre ton de marque, il reste un premier filtre — les échanges importants vous reviennent toujours.",
    included: [
      "Chatbot intégré à votre site ou vos réseaux",
      "Réponses automatiques aux questions fréquentes",
      "Qualification des prospects avant transfert à un humain",
      "Prise de rendez-vous automatisée",
      "Personnalisable à votre ton de marque",
    ],
    image: "/services/chatbot.svg",
    relatedProjectSlugs: ["avatar-amah"],
  },
  {
    slug: "plateformes-web",
    title: "Plateformes Web & Streaming",
    category: "Sites & Boutiques en ligne",
    tag: "Site & Boutique",
    summary:
      "Votre plateforme en ligne lancée en quelques semaines : billetterie, streaming, abonnements.",
    description:
      "Qu'il s'agisse de diffuser du contenu, gérer des abonnements ou vendre des billets, votre plateforme est conçue sur mesure autour de votre contenu et de vos utilisateurs. Compatible mobile, tablette et ordinateur dès le premier jour, avec hébergement et mise en ligne inclus.",
    included: [
      "Conception sur mesure adaptée à votre contenu",
      "Système d'abonnement ou de billetterie",
      "Compatible mobile, tablette et ordinateur",
      "Hébergement et mise en ligne inclus",
      "Formation à la gestion du contenu",
    ],
    image: "/services/plateformes-web.svg",
    relatedProjectSlugs: ["theamah", "ticketing-platform"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce & Boutiques en ligne",
    category: "Sites & Boutiques en ligne",
    tag: "Site & Boutique",
    summary:
      "Votre boutique en ligne prête à vendre dès le premier jour — paiement intégré, design sur-mesure.",
    description:
      "Votre boutique en ligne présente vos produits avec un catalogue soigné, un paiement intégré et un design qui reflète votre marque — prête à vendre dès la mise en ligne. La gestion des commandes et du stock reste simple, pensée pour que vous puissiez l'utiliser au quotidien sans assistance technique.",
    included: [
      "Catalogue produits avec photos et descriptions",
      "Paiement en ligne intégré",
      "Design sur mesure adapté à votre marque",
      "Gestion des commandes et du stock",
      "Optimisation pour le référencement Google",
    ],
    image: "/services/ecommerce.svg",
    relatedProjectSlugs: ["vertex-shop"],
  },
  {
    slug: "logiciels-metier",
    title: "Logiciels métier sur-mesure",
    category: "Applications & Sécurité sur mesure",
    tag: "Application sur mesure",
    summary:
      "Un logiciel taillé pour votre activité : suivi des commandes, gestion du stock, rapports automatiques.",
    description:
      "Fini les tableaux Excel qui se multiplient et les processus manuels qui font perdre du temps. On analyse d'abord vos process actuels, puis on développe un outil taillé pour votre activité : suivi des commandes, du stock ou des clients, avec des rapports générés automatiquement plutôt qu'assemblés à la main.",
    included: [
      "Analyse de vos processus actuels (Excel, papier...)",
      "Développement d'un outil adapté à votre activité",
      "Suivi des commandes, du stock ou des clients selon vos besoins",
      "Rapports et statistiques automatiques",
      "Formation de votre équipe à l'outil",
    ],
    image: "/services/logiciels-metier.svg",
    relatedProjectSlugs: ["transport-agency"],
  },
  {
    slug: "cybersecurite",
    title: "Cybersécurité & Audit",
    category: "Applications & Sécurité sur mesure",
    tag: "Sécurité",
    summary:
      "Identifiez vos failles avant que quelqu'un d'autre ne le fasse. Audit complet, rapport clair, recommandations actionnables.",
    description:
      "Un audit de sécurité de votre site ou de votre système actuel, avec un rapport clair — sans jargon technique — et des recommandations classées par niveau de risque. L'objectif n'est pas de vous submerger d'alertes, mais de vous donner une liste d'actions concrètes à traiter en priorité, avec un accompagnement pour les corriger.",
    included: [
      "Audit de sécurité de votre site ou système actuel",
      "Rapport clair, sans jargon technique",
      "Recommandations classées par niveau de risque",
      "Accompagnement pour corriger les failles identifiées",
      "Bonnes pratiques pour la suite",
    ],
    image: "/services/cybersecurite.svg",
    relatedProjectSlugs: ["cyber-content-generator"],
    hiddenFromHome: true,
  },
  {
    slug: "infographie-design",
    title: "Infographie & Design",
    category: "Design & Marketing",
    tag: "Design",
    summary:
      "Maquettes UI/UX pour vos sites et applications, création de logo et identité visuelle, visuels pour vos réseaux sociaux.",
    description:
      "Avant de coder un site ou une application, on conçoit ensemble son apparence et son ergonomie — les maquettes qui montrent où va chaque élément, les couleurs, la mise en page. Ce service couvre aussi la création de votre logo et de votre identité visuelle, ainsi que des visuels réguliers pour vos réseaux sociaux, pour une image cohérente sur tous vos supports.",
    included: [
      "Maquettes UI/UX pour vos projets de site ou d'application",
      "Création de logo et identité visuelle",
      "Visuels pour vos réseaux sociaux (posts, bannières)",
      "Cohérence visuelle sur tous vos supports",
      "Fichiers sources livrés, réutilisables de votre côté",
    ],
    image: "/services/infographie-design.svg",
  },
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    category: "Design & Marketing",
    tag: "Référencement",
    summary:
      "Optimisation des sites que vous nous confiez pour apparaître sur Google — référencement naturel (SEO).",
    description:
      "Un site bien construit ne sert à rien s'il reste invisible sur Google. Ce service optimise le référencement naturel des sites et applications que vous développez avec nous : structure des pages, temps de chargement, mots-clés pertinents pour votre activité et votre zone géographique.",
    included: [
      "Audit de référencement de votre site actuel",
      "Optimisation technique (vitesse, structure, balises)",
      "Choix des mots-clés pertinents pour votre activité",
      "Optimisation pour la recherche locale (Conakry et environs)",
      "Suivi de position sur les mots-clés ciblés",
    ],
    image: "/services/marketing-digital.svg",
  },
  {
    slug: "maintenance-sites",
    title: "Maintenance de sites & applications",
    category: "Applications & Sécurité sur mesure",
    tag: "Maintenance",
    summary:
      "Mises à jour, corrections de bugs et support technique après la livraison de votre site ou application.",
    description:
      "Un site ou une application ne s'arrête pas de vivre après sa mise en ligne : dépendances à mettre à jour, petits bugs à corriger, ajustements à faire au fil de l'usage réel. Ce service assure un suivi après livraison — pour les projets développés avec nous, sans avoir à chercher un autre prestataire à chaque besoin.",
    included: [
      "Mises à jour techniques régulières (sécurité, dépendances)",
      "Correction des bugs signalés",
      "Petits ajustements et évolutions mineures",
      "Support technique en cas de problème",
      "Priorité donnée aux sites/applications développés avec nous",
    ],
    image: "/services/maintenance-sites.svg",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
