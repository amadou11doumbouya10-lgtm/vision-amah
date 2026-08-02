"use client";

import { motion } from "framer-motion";

const etapes = [
  {
    numero: "01",
    titre: "Audit gratuit",
    duree: "30 minutes",
    description: "On analyse ensemble vos besoins et vos tâches répétitives, sans engagement.",
  },
  {
    numero: "02",
    titre: "Devis clair",
    duree: "Sous 48h",
    description: "Vous recevez une proposition détaillée avec un prix fixe, avant tout engagement.",
  },
  {
    numero: "03",
    titre: "Développement",
    duree: "1 à 3 semaines",
    description: "Votre projet prend forme, avec des points d'avancement réguliers.",
  },
  {
    numero: "04",
    titre: "Livraison & formation",
    duree: "",
    description: "Vous recevez votre projet fonctionnel, avec une prise en main pour l'utiliser en autonomie.",
  },
];

export default function Processus() {
  return (
    <section id="processus" className="border-t border-white/10 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Comment ça se passe
          </p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">
            De l&apos;idée au projet livré, en 4 étapes
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((etape, i) => (
            <motion.div
              key={etape.numero}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-white/10 pt-6"
            >
              <p className="mb-3 text-3xl font-black text-accent">{etape.numero}</p>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-widest-plus text-white/90">
                {etape.titre}
              </h3>
              {etape.duree && (
                <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent/70">
                  {etape.duree}
                </p>
              )}
              <p className="text-sm leading-relaxed text-white/60">{etape.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
