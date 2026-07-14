import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="bg-black">
      <Navbar />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
          Erreur 404
        </p>
        <h1 className="text-balance text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
          Page introuvable
        </h1>
        <p className="mt-6 max-w-md text-balance text-white/60">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-accent px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
        >
          Retour à l&apos;accueil
        </Link>
      </section>
      <Footer />
    </main>
  );
}
