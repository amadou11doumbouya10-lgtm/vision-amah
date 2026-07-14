"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pourquoi", label: "Pourquoi nous" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="block">
          <Image src="/logo.svg" alt="Vision Amah" width={140} height={20} priority />
        </a>
        <ul className="hidden gap-8 text-xs font-medium uppercase tracking-widest-plus text-white/70 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-full border border-accent/50 px-4 py-2 text-xs font-medium uppercase tracking-widest-plus text-white transition hover:border-accent hover:bg-accent hover:text-white sm:block"
          >
            Demander un devis
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium uppercase tracking-widest-plus text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full border border-accent/50 px-4 py-3 text-center text-white transition hover:border-accent hover:bg-accent"
              >
                Demander un devis
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
