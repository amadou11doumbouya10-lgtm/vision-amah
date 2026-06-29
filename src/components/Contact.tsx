"use client";

import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

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
          Contact
        </p>
        <h2 className="mb-6 text-balance text-4xl font-bold uppercase sm:text-6xl">
          Un projet en tête ? Parlons-en
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-balance text-white/60">
          Basés à Conakry, Guinée, nous travaillons en télétravail avec des clients
          en Afrique francophone et à l&apos;international.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/224624909865?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20Vision%20Amah."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
          >
            Discuter sur WhatsApp
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.amah.officiel@gmail.com&su=Projet%20avec%20Vision%20Amah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
          >
            contact.amah.officiel@gmail.com
          </a>
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 text-sm text-white/50">
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
