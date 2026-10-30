import { toolLogos } from "./toolLogos";

// Outils réellement utilisés dans les projets de Vision Amah : chaque entrée
// vient des Réalisations du site ou des package.json / requirements.txt des
// dépôts (vision-amah, campusmarket, mecef-site, amah-agent, generateur-cours,
// amah-avatar). Ne rien ajouter qui ne soit pas utilisé dans un vrai projet.
const outils = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Supabase",
  "PostgreSQL",
  "Prisma",
  "Groq",
  "Gemini",
  "scikit-learn",
  "Playwright",
  "Shopify",
  "Leaflet",
  "Vercel",
  "Netlify",
  "GitHub",
  "Claude Code",
  "Codex",
];

function ListeOutils({ copie = false }: { copie?: boolean }) {
  return (
    <ul
      // La copie ne sert qu'à boucler l'animation sans à-coup : les lecteurs
      // d'écran ne lisent la liste qu'une fois, et elle disparaît sans animation.
      aria-hidden={copie ? "true" : undefined}
      className={`flex shrink-0 items-center gap-12 pr-12 motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10 motion-reduce:gap-y-4 motion-reduce:px-6 ${
        copie ? "motion-reduce:hidden" : ""
      }`}
    >
      {outils.map((outil) => (
        <li
          key={outil}
          className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-widest-plus text-white/50"
        >
          {toolLogos[outil] && (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 fill-current">
              <path d={toolLogos[outil]} />
            </svg>
          )}
          {outil}
        </li>
      ))}
    </ul>
  );
}

export default function ToolsMarquee() {
  return (
    // Le survol de toute la bande met le défilement en pause.
    <section aria-labelledby="outils-titre" className="group border-y border-white/10 bg-background py-10">
      <h2
        id="outils-titre"
        className="mb-6 px-6 text-center text-xs font-medium uppercase tracking-widest-plus text-white/50"
      >
        Les outils avec lesquels on construit
      </h2>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full">
          <ListeOutils />
          <ListeOutils copie />
        </div>
      </div>
    </section>
  );
}
