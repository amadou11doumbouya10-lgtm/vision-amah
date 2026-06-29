export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-white/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Vision Amah. Tous droits réservés.</p>
        <p>Conakry, Guinée 🇬🇳</p>
      </div>
    </footer>
  );
}
