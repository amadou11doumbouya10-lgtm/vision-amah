"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
        Erreur
      </p>
      <h1 className="text-balance text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
        Une erreur est survenue
      </h1>
      <p className="mt-6 max-w-md text-balance text-white/60">
        Quelque chose s&apos;est mal passé. Vous pouvez réessayer.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-block rounded-full bg-accent px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
      >
        Réessayer
      </button>
    </main>
  );
}
