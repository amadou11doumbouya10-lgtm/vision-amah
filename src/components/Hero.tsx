"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CampusMarketMockup from "./CampusMarketMockup";

const garanties = ["Audit de 30 min, sans engagement", "Réponse sous 24 h"];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background pb-20 pt-28 lg:pb-24 lg:pt-36">
      {/* Halo de l'accent derrière le téléphone, à la place de l'ancienne vidéo. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible pour de nouveaux projets
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-8 text-xs font-medium uppercase tracking-widest-plus text-white/50"
          >
            Solutions informatiques & intelligence artificielle
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl"
          >
            {/* L'espace garde « temps. Automatisez » séparés dans le texte lu par Google. */}
            Gagnez du temps.{" "}
            <br />
            <span className="text-accent">Automatisez l&apos;essentiel.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-white/60 sm:text-lg"
          >
            Sites, boutiques en ligne, chatbots et outils sur mesure. On automatise ce
            qui vous prend du temps chaque jour.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            {/* Une ligne par bouton dès que la place le permet : coupé en deux
                lignes, le texte très espacé devient difficile à lire. */}
            <Link
              href="/#contact"
              className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85 sm:whitespace-nowrap"
            >
              Réserver mon audit IA gratuit
            </Link>
            <Link
              href="/#realisations"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus transition hover:bg-white/10 sm:whitespace-nowrap"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:gap-8"
          >
            {garanties.map((garantie) => (
              <li key={garantie} className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-accent"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {garantie}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CampusMarketMockup />
        </motion.div>
      </div>
    </section>
  );
}
