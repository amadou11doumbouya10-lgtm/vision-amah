"use client";

import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

const points = [
  {
    stat: "100%",
    label: "Solutions sur-mesure",
    description: "Chaque projet est conçu autour de vos besoins réels, pas d'un template générique.",
  },
  {
    stat: "IA-first",
    label: "Expertise en intelligence artificielle",
    description: "Assistants, chatbots et automatisations alimentés par les dernières technologies IA.",
  },
  {
    stat: "End-to-end",
    label: "De l'idée au déploiement",
    description: "Conception, développement et mise en production, accompagnés sur la durée.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="pourquoi"
      className="relative flex min-h-screen items-center overflow-hidden border-t border-white/10 bg-black py-28"
    >
      <VideoBackground src="/video/coding-on-a-laptop.mp4" alt="Programmation" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Pourquoi nous choisir
          </p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">
            Une approche technique, pas marketing
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <p className="mb-2 text-5xl font-black text-accent">{point.stat}</p>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest-plus text-white/80">
                {point.label}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
