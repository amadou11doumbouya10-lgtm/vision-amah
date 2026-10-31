// Applications montrées en grand format sous l'accueil (section « Nos
// applications »), choisies par Vision Amah. Le nom, les technos et la page
// /projets/[slug] viennent de projects.ts. Chaque statut doit rester vrai :
// le changer dès qu'une application change d'état (fin de la version de test,
// mise en ligne…). Les visuels sont de vrais écrans ou de vraies sorties.

export type Statut = "En ligne" | "Version de test" | "En développement" | "Code public";

export type Application = {
  slug: string;
  statut: Statut;
  accroche: string;
  lien: { href: string; label: string };
  // « navigateur » : barre d'adresse avec l'URL réelle ; « fenetre » : capture
  // qui a déjà sa barre de titre ; « document » : fichier produit par l'outil.
  cadre: "navigateur" | "fenetre" | "document";
  adresse?: string;
  image?: string;
  video?: string;
  fichier?: { chemin: string; lignes: string[] };
};

export const applications: Application[] = [
  {
    slug: "campusmarket",
    statut: "Version de test",
    accroche:
      "La marketplace des étudiants et des petits vendeurs de Conakry. On trouve un produit, on contacte le vendeur sur WhatsApp.",
    lien: { href: "https://campusmarket-nu.vercel.app", label: "Ouvrir l'application" },
    cadre: "navigateur",
    adresse: "campusmarket-nu.vercel.app/boutique/campus-tech",
    image: "/projects/campusmarket-boutique-demo.jpg",
  },
  {
    slug: "theamah",
    statut: "En ligne",
    accroche:
      "Une plateforme de streaming installable sur le téléphone : plus de 600 000 films et séries, sous-titres, favoris et reprise de lecture.",
    lien: { href: "https://amadou11doumbouya10-lgtm.github.io/-theamah-streaming/", label: "Ouvrir l'application" },
    cadre: "navigateur",
    adresse: "amadou11doumbouya10-lgtm.github.io/-theamah-streaming",
    image: "/projects/theamah.png",
    video: "/video/projects/theamah.mp4",
  },
  {
    slug: "avatar-amah",
    statut: "En ligne",
    accroche:
      "Un chatbot IA aux réponses courtes et élégantes. C'est lui qui vous répond dans la bulle de discussion de ce site.",
    lien: { href: "https://legendary-selkie-d298b7.netlify.app", label: "Ouvrir le chatbot" },
    cadre: "navigateur",
    adresse: "legendary-selkie-d298b7.netlify.app",
    image: "/projects/avatar-amah-capture.jpg",
  },
  {
    slug: "amah-agent",
    statut: "En développement",
    accroche:
      "Un assistant IA pour Windows, à la voix ou au texte : il range vos fichiers, remplit vos tableurs, rédige vos emails et navigue pour vous.",
    lien: { href: "https://github.com/amadou11doumbouya10-lgtm/amah-agent", label: "Voir le code" },
    cadre: "fenetre",
    image: "/projects/amah-agent.png",
    video: "/video/projects/amah-agent.mp4",
  },
  {
    slug: "generateur-cours",
    statut: "Code public",
    accroche:
      "Un sujet en entrée, un cours complet en sortie. L'outil cherche sur Wikipedia, écarte les extraits hors sujet grâce à un modèle entraîné maison, puis rédige le cours.",
    lien: { href: "https://github.com/amadou11doumbouya10-lgtm/generateur-cours", label: "Voir le code" },
    cadre: "document",
    // Sortie réelle de l'outil (dépôt generateur-cours, cours_generes/).
    fichier: {
      chemin: "cours_generes/programme_machine_learning/00_sommaire.md",
      lignes: [
        "# Programme complet : Formation complète en Machine Learning",
        "",
        "Programme généré automatiquement sur le sujet **Machine learning**.",
        "",
        "## Sommaire des modules",
        "",
        "1. **Introduction aux concepts de base** — Ce module présente les fondements du machine learning, notamment les types d'apprentissage et les algorithmes de base",
        "2. **Préparation et analyse des données** — Ce module couvre les méthodes de collecte, de nettoyage et de prétraitement des données pour le machine learning",
        "3. **Modèles de classification et de régression** — Ce module explore les algorithmes de classification et de régression, y compris les forêts aléatoires et les réseaux de neurones",
        "4. **Apprentissage non supervisé et clustering** — Ce module se concentre sur les techniques d'apprentissage non supervisé, notamment le clustering et la réduction de dimension",
        "5. **Réseaux de neurones profonds et deep learning** — Ce module plonge dans les réseaux de neurones profonds, y compris les convolutionnels et les récurrents",
        "6. **Déploiement et mise en production des modèles** — Ce module traite de la mise en production des modèles de machine learning, y compris la sélection des modèles et l'optimisation des performances",
      ],
    },
  },
];
