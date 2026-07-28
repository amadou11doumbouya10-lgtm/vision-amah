import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio — Amadou Doumbouya",
  description:
    "Développeur web & IA autodidacte basé à Conakry, Guinée. Créateur de Theamah+, Amah Agent, Vision Amah. Spécialisé Next.js, Python, cybersécurité et IA.",
};

const skills = [
  {
    category: "Front-end",
    icon: "◈",
    items: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "PWA"],
  },
  {
    category: "Back-end & BDD",
    icon: "◉",
    items: ["Node.js", "Python", "Prisma ORM", "PostgreSQL", "SQLite", "REST API", "Netlify Functions"],
  },
  {
    category: "IA & Agents",
    icon: "◎",
    items: ["Anthropic API", "Groq API", "Llama 3.3 70B", "Gemini Live", "Playwright", "PyInstaller", "TMDB API"],
  },
  {
    category: "E-Commerce",
    icon: "◇",
    items: ["Shopify", "Liquid", "Stripe"],
  },
  {
    category: "Outils & Déploiement",
    icon: "◆",
    items: ["Git / GitHub", "Vercel", "GitHub Pages", "Claude Code", "VS Code", "Service Workers"],
  },
  {
    category: "Cybersécurité",
    icon: "◈",
    items: ["Kali Linux", "Nmap", "Metasploit", "Wireshark", "OSINT", "Pentesting", "XSS / CSP"],
  },
];

const timeline = [
  {
    date: "2026",
    title: "Fondateur — Vision Amah",
    place: "Conakry, Guinée · Solutions IA & Web · Next.js / TypeScript / Claude",
    desc: "Création de Vision Amah, une agence spécialisée en IA, chatbots conversationnels, développement web et cybersécurité. Conception et déploiement du site complet (Next.js 14, Tailwind, Framer Motion) avec PWA, SEO avancé, Vercel Analytics et formulaire de contact Formspree.",
  },
  {
    date: "2026",
    title: "Créateur — Amah Agent",
    place: "Projet commercial · Windows AI Agent · Python / Groq / PyInstaller",
    desc: "Assistant IA local pour Windows avec 99 outils intégrés (fichiers, email, navigateur, Excel, voix…), mémoire SQLite persistante, interface HUD, mode live Gemini, système de licence offline, packaging .exe standalone.",
  },
  {
    date: "2026",
    title: "Créateur — Theamah+ Streaming",
    place: "Projet personnel · Déployé sur GitHub Pages",
    desc: "Application Netflix-style 100% côté client — 600 000+ titres via TMDB API, sous-titres SRT/VTT, système de comptes SHA-256, mode admin, PWA installable. Sans backend ni dépendances npm.",
  },
  {
    date: "2025–2026",
    title: "Développeur Full-Stack — Projets clients",
    place: "Next.js · Prisma · PostgreSQL · Stripe · Shopify",
    desc: "Plateforme de billetterie (Next.js + Stripe), application de gestion de fret Allemagne → Afrique (Next.js + Prisma + PostgreSQL), boutique Shopify Vertex Shop, générateur de contenu cybersécurité (Python + Anthropic API).",
  },
  {
    date: "2025",
    title: "Auto-formation — Cybersécurité & IA",
    place: "Kali Linux · Nmap · Metasploit · API Anthropic / Groq",
    desc: "Approfondissement en cybersécurité offensive et défensive (pentesting, OSINT, analyse réseau) et premiers développements avec des APIs d'intelligence artificielle.",
  },
  {
    date: "2024",
    title: "Auto-formation — Développement Web",
    place: "HTML · CSS · JavaScript · React · Next.js · Node.js · Git",
    desc: "Apprentissage autonome des fondamentaux du web et des frameworks modernes. Développeur autodidacte basé à Conakry, Guinée 🇬🇳.",
  },
];

const stats = [
  { num: "7+", label: "Projets déployés" },
  { num: "99", label: "Outils — Amah Agent" },
  { num: "600K+", label: "Titres — Theamah+" },
  { num: "3", label: "Ventures actives" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-black">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(59,130,246,0.12)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(59,130,246,0.06)_0%,transparent_50%)]" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 md:items-center">
          {/* text */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest-plus text-accent">
              Disponible pour de nouveaux projets
            </p>
            <h1 className="mb-3 text-balance text-5xl font-black uppercase leading-tight tracking-tight sm:text-7xl">
              Amadou
              <br />
              <span className="text-accent">Doumbouya</span>
            </h1>
            <p className="mb-6 text-lg text-white/60">
              Développeur <span className="text-white font-semibold">Web & IA</span>
            </p>
            <p className="mb-8 max-w-md text-balance text-sm leading-relaxed text-white/50">
              Développeur autodidacte basé à Conakry, Guinée 🇬🇳. Je crée des applications web modernes, des agents IA locaux et j&apos;aide les entreprises à rester sécurisées — du e-commerce aux outils IA Windows, tout construit avec précision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projets"
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
              >
                Me contacter
              </a>
              <a
                href="https://github.com/amadou11doumbouya10-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-[-16px] animate-pulse rounded-full border border-accent/30" />
              <div className="absolute inset-[-32px] rounded-full border border-accent/10" />
              <div className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border-2 border-accent/40 bg-white/[0.03] text-7xl font-black tracking-tight text-accent shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                AD
                <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-green-500 text-xs text-white">✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="border-t border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 text-center ${i > 0 ? "border-l border-white/10" : ""}`}
            >
              <p className="text-4xl font-black text-accent">{s.num}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest-plus text-white/40">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJETS ── */}
      <section id="projets" className="border-t border-white/10 bg-black py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Réalisations
          </p>
          <h2 className="mb-3 text-4xl font-bold uppercase sm:text-5xl">Mes Projets</h2>
          <p className="mb-16 max-w-xl text-sm leading-relaxed text-white/50">
            Des applications web que j&apos;ai conçues, développées et déployées de A à Z.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.slug}
                href={`/projets/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition hover:border-accent/50 hover:bg-white/[0.03]"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      aria-label={project.name}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`h-full w-full transition duration-300 group-hover:scale-105 ${
                        project.fit === "contain" ? "object-contain p-6" : "object-cover"
                      }`}
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="text-xs font-medium uppercase tracking-widest-plus text-accent/80">
                    {project.tag}
                  </p>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{project.summary}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPÉTENCES ── */}
      <section id="competences" className="border-t border-white/10 bg-white/[0.02] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Savoir-faire
          </p>
          <h2 className="mb-3 text-4xl font-bold uppercase sm:text-5xl">Compétences</h2>
          <p className="mb-16 max-w-xl text-sm leading-relaxed text-white/50">
            Les technologies et outils que j&apos;utilise pour construire des produits de qualité.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-white/10 bg-black p-6"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-widest-plus text-accent">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARCOURS ── */}
      <section id="parcours" className="border-t border-white/10 bg-black py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Expérience
          </p>
          <h2 className="mb-3 text-4xl font-bold uppercase sm:text-5xl">Parcours</h2>
          <p className="mb-16 max-w-xl text-sm leading-relaxed text-white/50">
            Mon évolution dans le développement web et l&apos;intelligence artificielle.
          </p>

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-[80px_1fr] gap-8 sm:grid-cols-[120px_1fr]">
                <p className="pt-1 text-right text-xs font-bold text-white/40">{item.date}</p>
                <div className="relative border-l border-accent/20 pl-8">
                  <span className="absolute -left-[5px] top-[6px] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                  <p className="mb-1 font-semibold text-white">{item.title}</p>
                  <p className="mb-2 text-xs font-medium text-accent">{item.place}</p>
                  <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-white/10 bg-white/[0.02] py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Contact
          </p>
          <h2 className="mb-3 text-4xl font-bold uppercase sm:text-5xl">Me Contacter</h2>
          <p className="mb-16 max-w-xl text-sm leading-relaxed text-white/50">
            Vous avez un projet en tête ? Je lis tous mes messages.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {[
                { icon: "✉", label: "Email", value: "amadou11doumbouya10@gmail.com", href: "mailto:amadou11doumbouya10@gmail.com" },
                { icon: "◉", label: "GitHub", value: "amadou11doumbouya10-lgtm", href: "https://github.com/amadou11doumbouya10-lgtm" },
                { icon: "◎", label: "WhatsApp", value: "+224 624 909 865", href: "https://wa.me/224624909865" },
                { icon: "◈", label: "Localisation", value: "Conakry, Guinée — disponible à distance", href: null },
              ].map((item) => {
                const El = item.href ? "a" : "div";
                return (
                  <El
                    key={item.label}
                    {...(item.href
                      ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black p-5 transition hover:border-accent/40"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-accent/30 text-accent">
                      {item.icon}
                    </span>
                    <div>
                      <p className="mb-0.5 text-xs font-bold uppercase tracking-widest-plus text-white/40">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </El>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-8">
              <p className="mb-6 text-sm font-semibold text-white/60">
                Envoyez-moi un message — je lis tout personnellement.
              </p>
              <ContactForm />
              <p className="mb-4 mt-8 text-center text-xs uppercase tracking-widest-plus text-white/40">
                ou directement
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/224624909865?text=Bonjour%20Amadou%2C%20j%27ai%20vu%20votre%20portfolio%20et%20j%27aimerais%20discuter%20d%27un%20projet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
                >
                  Écrire sur WhatsApp
                </a>
                <a
                  href="mailto:amadou11doumbouya10@gmail.com?subject=Prise%20de%20contact%20%E2%80%94%20Portfolio&body=Bonjour%20Amadou%2C%0A%0AJ%27ai%20vu%20votre%20portfolio%20et%20j%27aimerais%20discuter%20d%27un%20projet.%0A%0A"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
                >
                  Envoyer un email
                </a>
                <p className="text-center text-xs text-white/40">
                  Ou réservez un audit IA gratuit sur{" "}
                  <a href="/#contact" className="text-accent underline underline-offset-4">
                    Vision Amah →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
