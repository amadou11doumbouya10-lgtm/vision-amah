"use client";

import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <VideoBackground src="/video/coding-technology.mp4" alt="Développement logiciel" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-medium uppercase tracking-widest-plus text-white/50"
        >
          Solutions informatiques & intelligence artificielle
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-3xl font-black uppercase leading-tight tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl"
        >
          Nous construisons
          <br /> le futur intelligent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/60 sm:text-lg"
        >
          Assistants IA, chatbots conversationnels, plateformes web et solutions
          e-commerce sur-mesure, conçus depuis Conakry par Vision Amah
          pour l&apos;Afrique francophone et l&apos;international.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
          >
            Démarrer un projet
          </a>
          <a
            href="#realisations"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-widest-plus transition hover:bg-white/10"
          >
            Voir nos réalisations
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40">
        <span className="text-xs uppercase tracking-widest-plus">Découvrir</span>
      </div>
    </section>
  );
}
