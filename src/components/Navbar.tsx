"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pourquoi", label: "Pourquoi nous" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
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
          ? "border-b border-white/10 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="block shrink-0">
          <Image
            src="/logo.png"
            alt="Vision Amah"
            width={203}
            height={40}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        {/* Six liens + logo + bouton devis demandent ~1180 px : en dessous de xl
            (1280 px), ils passent dans le menu hamburger plutôt que de se tasser. */}
        <ul className="hidden gap-8 whitespace-nowrap text-xs font-medium uppercase tracking-widest-plus text-white/70 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden whitespace-nowrap rounded-full border border-accent/50 px-4 py-2 text-xs font-medium uppercase tracking-widest-plus text-white transition hover:border-accent hover:bg-accent hover:text-white sm:block"
          >
            Demander un devis
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white xl:hidden"
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
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-md xl:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium uppercase tracking-widest-plus text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full border border-accent/50 px-4 py-3 text-center text-white transition hover:border-accent hover:bg-accent"
              >
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
