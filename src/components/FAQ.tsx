"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    q: "Combien de temps prend un projet ?",
    a: "Ça dépend du projet : un site vitrine simple prend 1 à 2 semaines, une boutique en ligne ou une application sur mesure entre 2 et 3 semaines. Vous recevez un délai précis dans votre devis, avant de commencer.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Un acompte de 50 % au démarrage du projet, puis le solde à la livraison. Aucun paiement caché, aucune surprise en cours de route.",
  },
  {
    q: "Puis-je modifier le site moi-même ensuite ?",
    a: "Oui. Selon le projet, vous repartez avec un accès simple pour modifier vos textes et vos images vous-même, ou avec une formation rapide si l'outil est plus technique. L'objectif : que vous ne dépendiez pas de moi pour chaque petit changement.",
  },
  {
    q: "Avec quels types d'entreprises travaillez-vous ?",
    a: "Petites et moyennes entreprises, commerces, indépendants — à Conakry comme ailleurs. Restauration, mode, beauté, alimentation, services... Si vous avez besoin d'être visible en ligne ou de gagner du temps grâce à l'automatisation, on peut probablement travailler ensemble.",
  },
];

export default function FAQ() {
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/10 bg-white/[0.02] py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Questions fréquentes
          </p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">
            Avant de vous lancer
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {questions.map((item, i) => {
            const estOuvert = ouvert === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOuvert(estOuvert ? null : i)}
                  aria-expanded={estOuvert}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-xl text-accent transition-transform duration-200 ${
                      estOuvert ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {estOuvert && (
                  <p className="pb-6 text-sm leading-relaxed text-white/60">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
