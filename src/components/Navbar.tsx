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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
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
        <a
          href="/#contact"
          className="rounded-full border border-accent/50 px-4 py-2 text-xs font-medium uppercase tracking-widest-plus text-white transition hover:bg-accent hover:border-accent hover:text-white"
        >
          Demander un devis
        </a>
      </nav>
    </header>
  );
}
