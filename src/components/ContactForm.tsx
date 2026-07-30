"use client";

import { useState } from "react";

// Remplace par ton identifiant Formspree (https://formspree.io → New Form).
// Idéalement via une variable d'environnement Vercel : NEXT_PUBLIC_FORMSPREE_ID
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "TON_ID_FORMSPREE";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-accent/40 bg-white/[0.03] p-8 text-center">
        <p className="mb-2 text-lg font-semibold text-white">Message envoyé ✅</p>
        <p className="text-sm text-white/60">
          Merci ! On vous recontacte très vite pour votre audit IA gratuit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-lg gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest-plus text-white/50">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest-plus text-white/50">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
          />
        </div>
      </div>
      {/* Facultatif à dessein : chaque champ obligatoire fait baisser le taux de
          soumission, et un numéro se donne moins volontiers qu'un email. Ceux qui
          préfèrent WhatsApp — majoritaire sur le marché visé — le laissent, les
          autres ne sont pas bloqués. */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-xs uppercase tracking-widest-plus text-white/50"
        >
          Téléphone / WhatsApp{" "}
          <span className="normal-case tracking-normal text-white/30">
            (facultatif)
          </span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          // inputMode fait apparaître le clavier numérique sur mobile, d'où vient
          // la majorité du trafic.
          inputMode="tel"
          autoComplete="tel"
          placeholder="+224 6XX XX XX XX"
          className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent"
        />
      </div>

      {/* Piège à robots : Formspree rejette silencieusement tout envoi où `_gotcha`
          est rempli. Un humain ne le voit pas, un robot qui remplit tout se trahit.
          L'identifiant Formspree étant public par nature, c'est ce qui protège le
          quota mensuel des envois automatisés. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest-plus text-white/50">
          Votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Décrivez brièvement votre activité et ce que vous aimeriez automatiser…"
          className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Une erreur est survenue. Réessayez, ou écrivez-nous directement sur WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Envoi…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
