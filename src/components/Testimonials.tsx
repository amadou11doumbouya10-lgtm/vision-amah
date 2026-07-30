"use client";

import { motion } from "framer-motion";

export type Testimonial = {
  /** La citation, telle que le client l'a formulée. */
  quote: string;
  /** Prénom et nom du client. */
  name: string;
  /** Fonction et entreprise, ex. « Gérante, Vertex Shop ». */
  role: string;
  /** Projet concerné, affiché en petit. Optionnel. */
  project?: string;
};

// À remplir avec de VRAIS témoignages, obtenus avec l'accord des clients.
// Tant que ce tableau est vide, la section ne s'affiche pas du tout : mieux vaut
// aucune preuve sociale qu'une preuve sociale inventée, qui se retourne contre
// l'entreprise dès qu'un prospect vérifie.
//
// Exemple de format :
// {
//   quote: "En trois semaines, notre suivi de colis est passé d'Excel à une vraie
//           plateforme. On a arrêté de perdre des dossiers.",
//   name: "…",
//   role: "…, Transport Agency",
//   project: "Plateforme de gestion de fret",
// },
export const testimonials: Testimonial[] = [];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="temoignages"
      className="border-t border-white/10 bg-white/[0.02] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Ils nous font confiance
          </p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">
            Ce que disent nos clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black p-8 transition hover:border-accent/40"
            >
              <div>
                <span
                  aria-hidden="true"
                  className="mb-4 block text-4xl leading-none text-accent/40"
                >
                  &ldquo;
                </span>
                <blockquote className="text-sm leading-relaxed text-white/70">
                  {item.quote}
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-accent">{item.role}</p>
                {item.project && (
                  <p className="mt-1 text-xs text-white/40">{item.project}</p>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
