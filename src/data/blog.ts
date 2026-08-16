export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  tag: string;
  publishedAt: string;
  readingMinutes: number;
  content: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "llama-3-3-70b-avatar-amah",
    title: "Llama 3.3 70B : le modèle qui faisait tourner Avatar Amah, et pourquoi on vient d'en changer",
    summary:
      "Le modèle qui propulsait notre chatbot Avatar Amah vient d'être déprécié par Groq. Ce qu'était Llama 3.3 70B, pourquoi on l'avait choisi, et vers quoi on migre.",
    tag: "Intelligence artificielle",
    publishedAt: "2026-08-16",
    readingMinutes: 4,
    content: [
      {
        type: "paragraph",
        text: "Avatar Amah, le chatbot public de Vision Amah, tournait depuis son lancement sur Llama 3.3 70B, servi par l'infrastructure Groq. Ce modèle vient d'être déprécié — l'occasion d'expliquer ce qu'il était, pourquoi on l'avait choisi, et ce qui le remplace.",
      },
      { type: "heading", text: "Ce qu'était Llama 3.3 70B" },
      {
        type: "paragraph",
        text: "Publié par Meta en décembre 2024, Llama 3.3 70B est un modèle dense — ses 70 milliards de paramètres s'activent tous à chaque requête, contrairement aux architectures « mixture of experts ». Malgré sa taille modeste face aux modèles plus récents, ses résultats de référence rivalisaient avec des modèles bien plus grands comme Llama 3.1 405B — un rapport performance/taille qui en faisait un choix pragmatique pour un usage en production. Fenêtre de contexte : 128 000 tokens, avec un support multilingue officiel incluant le français.",
      },
      { type: "heading", text: "Pourquoi ce choix pour Avatar Amah" },
      {
        type: "list",
        items: [
          "Latence : servi sur l'infrastructure Groq (LPU, pas GPU classique), les réponses arrivent quasi instantanément — important pour un chatbot public où chaque seconde d'attente coûte de l'engagement.",
          "Coût : le tarif par token sur Groq restait largement inférieur aux modèles propriétaires équivalents, un critère décisif pour un service gratuit et illimité en usage normal.",
          "Qualité du français : un niveau de fluidité suffisant pour la persona « The Amah » — volontairement courte, dense, jamais de liste ni de formule de politesse.",
        ],
      },
      { type: "heading", text: "La dépréciation, et ce qui change" },
      {
        type: "paragraph",
        text: "Le 17 juin 2026, Groq a annoncé la dépréciation de llama-3.3-70b-versatile (ainsi que de llama-3.1-8b-instant). Leur remplacement recommandé pour un usage généraliste : gpt-oss-120b, un modèle ouvert publié par OpenAI en août 2025 sous licence Apache 2.0.",
      },
      {
        type: "paragraph",
        text: "Contrairement à Llama 3.3 70B, gpt-oss-120b utilise une architecture « mixture of experts » : sur ses 117 milliards de paramètres au total, seuls 5,1 milliards s'activent réellement à chaque requête (128 experts par couche, 4 actifs par token) — un compromis qui lui permet de tourner sur un seul GPU 80 Go tout en visant des résultats proches d'o4-mini sur les benchmarks de raisonnement. Sa fenêtre de contexte grimpe à 131 000 tokens.",
      },
      {
        type: "paragraph",
        text: "Avatar Amah tourne désormais sur ce nouveau modèle, toujours via Groq, sans changement visible pour les visiteurs du site — c'est exactement l'objectif d'une migration de ce type.",
      },
      { type: "heading", text: "Ce que ça dit de notre approche" },
      {
        type: "paragraph",
        text: "Les modèles d'IA évoluent vite, et des dépréciations comme celle-ci sont normales. Ce qui compte, c'est de suivre ces changements avant qu'ils ne cassent quelque chose en production — pas après. Si un outil IA tourne sur un modèle qui pourrait être retiré du jour au lendemain, c'est exactement le genre de vérification qu'on fait lors d'un audit.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
