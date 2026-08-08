"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  "Autodidacte",
  "Machine Learning — DeepLearning.AI / Stanford Online",
  "Fondateur, Vision Amah",
];

export default function QuiSuisJe() {
  return (
    <section id="apropos" className="border-t border-white/10 bg-white/[0.02] py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <div className="relative mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border-2 border-accent/40 shadow-[0_0_50px_rgba(59,130,246,0.18)]">
          <Image
            src="/about/amadou-doumbouya.jpg"
            alt="Amadou Doumbouya"
            fill
            className="object-cover"
            sizes="144px"
          />
        </div>
        <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
          Qui suis-je
        </p>
        <h2 className="mb-6 text-4xl font-bold uppercase sm:text-5xl">
          Amadou Doumbouya
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-balance text-base leading-relaxed text-white/70">
          Développeur web &amp; IA autodidacte basé à Conakry, en Guinée. Je construis
          Vision Amah pour rendre l&apos;automatisation et l&apos;IA accessibles aux
          entreprises locales — sites, boutiques en ligne, assistants IA, jusqu&apos;à
          la cybersécurité. Formé en Machine Learning (DeepLearning.AI / Stanford
          Online) et certifié IBM SkillsBuild, j&apos;apprends en continu pour rester à
          jour sur ce que l&apos;IA peut réellement apporter à votre activité.
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/60"
            >
              {badge}
            </span>
          ))}
        </div>
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest-plus text-accent transition hover:text-white"
        >
          Voir mon parcours complet
          <span aria-hidden="true">→</span>
        </a>
      </motion.div>
    </section>
  );
}
