"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Assistants IA & Automatisation",
    description:
      "Automatisez 80 % de vos tâches administratives. Votre assistant lit vos PDF, remplit vos Excel, rédige vos emails et navigue sur le web à votre place — gagnez 10 heures par semaine.",
    image: "/services/automatisation.svg",
  },
  {
    title: "Chatbots & Avatars conversationnels",
    description:
      "Un assistant disponible 24h/24 qui répond à vos clients, qualifie vos prospects et prend des rendez-vous — sans que vous leviez le petit doigt.",
    image: "/services/chatbot.svg",
  },
  {
    title: "Plateformes Web & Streaming",
    description:
      "Votre plateforme en ligne lancée en quelques semaines : billetterie, streaming, abonnements. Vos clients accèdent à votre contenu partout, sur tous les appareils.",
    image: "/services/plateformes-web.svg",
  },
  {
    title: "E-commerce & Boutiques en ligne",
    description:
      "Votre boutique en ligne prête à vendre dès le premier jour — paiement intégré, design sur-mesure, zéro friction pour vos clients.",
    image: "/services/ecommerce.svg",
  },
  {
    title: "Logiciels métier sur-mesure",
    description:
      "Fini les tablettes Excel et les processus manuels. Un logiciel taillé pour votre activité : suivi des commandes, gestion du stock, rapports automatiques.",
    image: "/services/logiciels-metier.svg",
  },
  {
    title: "Cybersécurité & Audit",
    description:
      "Identifiez vos failles avant que quelqu'un d'autre ne le fasse. Audit complet, rapport clair, recommandations actionnables — protégez votre business dès maintenant.",
    image: "/services/cybersecurite.svg",
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
            Ce que vous gagnez concrètement
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
                  className="object-cover"
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
