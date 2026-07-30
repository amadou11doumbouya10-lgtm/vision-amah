"use client";

import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden border-t border-white/10 bg-black py-28"
    >
      <VideoBackground src="/video/mouse-clicking.mp4" alt="Travail sur ordinateur" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
          Passez à l&apos;action
        </p>
        <h2 className="mb-4 text-balance text-4xl font-bold uppercase sm:text-6xl">
          Audit IA gratuit — 30 minutes
        </h2>
        <p className="mx-auto mb-3 max-w-xl text-balance text-lg font-medium text-white/80">
          On analyse ensemble vos tâches répétitives et on identifie ce qu&apos;on peut automatiser immédiatement.
        </p>
        <p className="mx-auto mb-10 max-w-xl text-balance text-sm text-white/50">
          Sans engagement. Sans jargon technique. Juste des solutions concrètes pour votre business.
        </p>

        <ContactForm />

        <p className="mx-auto mb-6 mt-12 text-xs uppercase tracking-widest-plus text-white/40">
          ou contactez-nous directement
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/224611768552?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20audit%20IA%20gratuit%20avec%20Vision%20Amah."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
          >
            Réserver sur WhatsApp
          </a>
          <a
            href="mailto:amadou11doumbouya10@gmail.com?subject=Audit%20IA%20Gratuit%20%E2%80%94%20Vision%20Amah&body=Bonjour%2C%0A%0AJe%20souhaite%20r%C3%A9server%20un%20audit%20IA%20gratuit%20de%2030%20minutes.%0A%0AMon%20activit%C3%A9%20%3A%20"
            className="inline-block rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
          >
            Envoyer un email
          </a>
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 text-sm text-white/40">
          <p>Conakry, Guinée — disponible à l&apos;international</p>
          <a
            href="https://github.com/amadou11doumbouya10-lgtm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white"
          >
            github.com/amadou11doumbouya10-lgtm
          </a>
        </div>
      </motion.div>
    </section>
  );
}
