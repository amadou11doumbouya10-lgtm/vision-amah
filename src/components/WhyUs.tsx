"use client";

import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

const points = [
  {
    stat: "10h",
    label: "Gagnées par semaine",
    description: "Nos clients automatisent leurs tâches répétitives et récupèrent en moyenne 10 heures par semaine grâce à nos assistants IA.",
  },
  {
    stat: "×3",
    label: "Plus vite sur le marché",
    description: "De l'idée au site en ligne, nous livrons en semaines — pas en mois. Votre activité démarre pendant que vos concurrents attendent.",
  },
  {
    stat: "0€",
    label: "Pour commencer",
    description: "Un audit de 30 minutes gratuit pour analyser vos besoins, identifier vos gains rapides et vous proposer une solution adaptée à votre budget.",
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
            Des résultats mesurables, pas des promesses
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
