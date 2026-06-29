"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Assistants IA & Automatisation",
    description:
      "Assistants IA locaux capables d'exécuter des dizaines d'outils (fichiers, email, navigateur, voix) pour automatiser vos tâches métier, propulsés par Groq/Llama 3.3 et l'API Anthropic.",
    image: "/projects/amah-agent.png",
  },
  {
    title: "Chatbots & Avatars conversationnels",
    description:
      "Chatbots IA et avatars conversationnels personnalisés pour l'assistance client, le support et l'engagement utilisateur.",
    image: "/projects/chatbot.svg",
  },
  {
    title: "Plateformes Web & Streaming",
    description:
      "Applications web performantes type Netflix, billetterie en ligne avec paiement Stripe, et plateformes de diffusion de contenu en temps réel, en PWA.",
    image: "/projects/theamah.png",
  },
  {
    title: "E-commerce & Boutiques en ligne",
    description:
      "Boutiques Shopify avec thèmes Liquid personnalisés, et intégrations de paiement sur-mesure.",
    image: "/projects/vertex-shop.jpeg",
    fit: "contain" as const,
  },
  {
    title: "Logiciels métier sur-mesure",
    description:
      "Applications Next.js, bases de données Prisma/PostgreSQL, pour la gestion de fret, logistique et opérations d'entreprise.",
    image: "/projects/transport-agency.svg",
  },
  {
    title: "Cybersécurité & Audit",
    description:
      "Audit de sécurité, tests d'intrusion et sensibilisation, avec Kali Linux, Nmap, Metasploit et Wireshark.",
    image: "/projects/cyber-content-generator.svg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Nos services
          </p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">
            Des solutions informatiques pensées pour la performance
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition hover:border-accent/50 hover:bg-white/[0.03]"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={
                    "fit" in service && service.fit === "contain"
                      ? "object-contain p-6"
                      : "object-cover"
                  }
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
