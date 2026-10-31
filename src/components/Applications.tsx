"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { applications, type Application, type Statut } from "@/data/applications";
import { getProject } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ProjectCardVideo from "./ProjectCardVideo";

const pastille: Record<Statut, string> = {
  "En ligne": "bg-emerald-400",
  "Version de test": "bg-amber-400",
  "En développement": "bg-accent",
  "Code public": "bg-white/70",
};

function Cadre({ app, nom }: { app: Application; nom: string }) {
  const contenu = app.fichier ? (
    <div className="h-full overflow-hidden p-5 font-mono text-[11px] leading-relaxed text-white/70 sm:p-7 sm:text-xs">
      {app.fichier.lignes.map((ligne, i) =>
        ligne === "" ? (
          <div key={i} className="h-3" />
        ) : (
          <p key={i} className={ligne.startsWith("#") ? "font-semibold text-accent" : undefined}>
            {ligne}
          </p>
        )
      )}
    </div>
  ) : (
    <>
      {app.image && (
        <Image
          src={app.image}
          alt={`Écran de ${nom}`}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-top"
        />
      )}
      {/* La vidéo se pose par-dessus la capture une fois chargée. */}
      {app.video && (
        <div className="absolute inset-0">
          <ProjectCardVideo src={app.video} alt={`Démonstration de ${nom}`} className="h-full w-full object-cover object-top" />
        </div>
      )}
    </>
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-[0_40px_100px_-40px_rgba(2,107,222,0.5)]">
      {app.cadre !== "fenetre" && (
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </span>
          <span className="mx-auto min-w-0 truncate rounded-full bg-white/5 px-4 py-1 font-mono text-[11px] text-white/60">
            {app.adresse ?? app.fichier?.chemin}
          </span>
        </div>
      )}
      <div className="relative aspect-video bg-background">{contenu}</div>
    </div>
  );
}

export default function Applications() {
  const reducedMotion = useReducedMotion();
  const [actif, setActif] = useState(0);
  // Défilement automatique : coupé par le bouton pause ou dès que le visiteur
  // choisit lui-même une application, suspendu pendant le survol, le focus
  // clavier et quand la section n'est pas à l'écran.
  const [lecture, setLecture] = useState(true);
  const [survol, setSurvol] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const listeRef = useRef<HTMLDivElement>(null);
  const ongletsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Sur mobile, la rangée d'onglets défile : on y ramène l'onglet actif quand
  // l'application change seule, sans faire bouger la page.
  useEffect(() => {
    const liste = listeRef.current;
    const onglet = ongletsRef.current[actif];
    if (!liste || !onglet) return;
    const l = liste.getBoundingClientRect();
    const o = onglet.getBoundingClientRect();
    if (o.left < l.left || o.right > l.right) {
      liste.scrollBy({ left: o.left - l.left, behavior: reducedMotion ? "auto" : "smooth" });
    }
  }, [actif, reducedMotion]);

  const automatique = lecture && !reducedMotion;
  const enCours = automatique && !survol && visible;

  const app = applications[actif];
  const projet = getProject(app.slug);
  const nom = projet?.name ?? app.slug;

  function choisir(index: number) {
    setLecture(false);
    setActif(index);
  }

  function clavier(event: KeyboardEvent<HTMLDivElement>) {
    const dernier = applications.length - 1;
    const cibles: Record<string, number> = {
      ArrowRight: actif === dernier ? 0 : actif + 1,
      ArrowLeft: actif === 0 ? dernier : actif - 1,
      Home: 0,
      End: dernier,
    };
    const cible = cibles[event.key];
    if (cible === undefined) return;
    event.preventDefault();
    choisir(cible);
    ongletsRef.current[cible]?.focus();
  }

  return (
    <section ref={sectionRef} id="applications" className="border-t border-white/10 bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">Nos applications</p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">En ligne, en test ou en chantier</h2>
          <p className="mt-4 text-base text-white/60">
            Des outils construits par Vision Amah, montrés tels qu&apos;ils sont aujourd&apos;hui.
          </p>
        </motion.div>

        <div
          onMouseEnter={() => setSurvol(true)}
          onMouseLeave={() => setSurvol(false)}
          onFocus={() => setSurvol(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setSurvol(false);
          }}
        >
          <div className="flex items-center gap-3">
            <div
              ref={listeRef}
              role="tablist"
              aria-label="Applications Vision Amah"
              onKeyDown={clavier}
              className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
            >
              {applications.map((a, i) => {
                const selectionne = i === actif;
                return (
                  <button
                    key={a.slug}
                    ref={(el) => {
                      ongletsRef.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`onglet-${a.slug}`}
                    aria-selected={selectionne}
                    aria-controls="panneau-application"
                    tabIndex={selectionne ? 0 : -1}
                    onClick={() => choisir(i)}
                    className={`relative shrink-0 overflow-hidden whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest-plus transition ${
                      selectionne
                        ? "border-white/30 bg-white/10 text-white"
                        : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {getProject(a.slug)?.name ?? a.slug}
                    {/* Barre de progression : sa fin fait passer à l'application suivante. */}
                    {selectionne && automatique && (
                      <span
                        key={actif}
                        aria-hidden="true"
                        onAnimationEnd={() => {
                          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                          setActif((actif + 1) % applications.length);
                        }}
                        style={{ animationPlayState: enCours ? "running" : "paused" }}
                        className="animate-progression absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setLecture((l) => !l)}
                aria-label={lecture ? "Arrêter le défilement automatique" : "Reprendre le défilement automatique"}
                className="mb-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
                  {lecture ? (
                    <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
                  ) : (
                    <path d="M8 5.5v13l10.5-6.5z" />
                  )}
                </svg>
              </button>
            )}
          </div>

          <motion.div
            key={app.slug}
            id="panneau-application"
            role="tabpanel"
            aria-labelledby={`onglet-${app.slug}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8 grid items-center gap-10 lg:grid-cols-[1.7fr_1fr]"
          >
            <Cadre app={app} nom={nom} />
            <div className="min-h-[19rem] lg:min-h-0">
              <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest-plus text-white/70">
                <span className={`h-2 w-2 rounded-full ${pastille[app.statut]}`} aria-hidden="true" />
                {app.statut}
              </p>
              <h3 className="mt-4 text-3xl font-bold uppercase">{nom}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">{app.accroche}</p>
              {projet && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {projet.stack.map((techno) => (
                    <li key={techno} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
                      {techno}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={app.lien.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85 sm:whitespace-nowrap"
                >
                  {app.lien.label}
                </a>
                <Link
                  href={`/projets/${app.slug}`}
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-xs font-semibold uppercase tracking-widest-plus transition hover:bg-white/10 sm:whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
