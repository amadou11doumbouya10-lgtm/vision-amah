import Image from "next/image";

// Maquette HTML/CSS de CampusMarket Guinée (campusmarket-nu.vercel.app), fidèle
// à l'écran catalogue réel : couleurs, logo, catégories et cartes produit
// reprises du dépôt campusmarket. Les 4 produits sont ceux de démonstration du
// site en ligne : ils gardent leur badge « Démo », comme sur CampusMarket.
// L'application n'a ni messagerie ni paiement en ligne : le contact se fait
// sur WhatsApp, rien ici ne doit laisser croire le contraire.

const produits = [
  {
    titre: "Écouteurs sans fil Bluetooth",
    categorie: "Téléphones et accessoires",
    prix: "85 000 GNF",
    boutique: "Campus Tech",
    photo: "/campusmarket/ecouteurs.jpg",
  },
  {
    titre: "Chemise en wax sur mesure",
    categorie: "Mode et accessoires",
    prix: "180 000 GNF",
    boutique: "Atelier Wax & Style",
    photo: "/campusmarket/chemise-wax.jpg",
  },
  {
    titre: "Calculatrice scientifique",
    categorie: "Livres et fournitures",
    prix: "150 000 GNF",
    boutique: "Librairie Étudiante",
    photo: "/campusmarket/calculatrice.jpg",
  },
  {
    titre: "Jus de bissap 1 L",
    categorie: "Alimentation et boissons",
    prix: "10 000 GNF",
    boutique: "Saveurs du Campus",
    photo: "/campusmarket/jus-bissap.jpg",
  },
];

const categories = ["Tout", "Mode et accessoires", "Beauté et soins", "Téléphones et accessoires"];

// Icônes de la barre du bas (mêmes formes que lucide-react dans CampusMarket).
const navigation = [
  {
    label: "Accueil",
    icon: (
      <>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </>
    ),
  },
  {
    label: "Produits",
    active: true,
    icon: (
      <>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </>
    ),
  },
  {
    label: "Boutiques",
    icon: (
      <>
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M4 9v11h16V9" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
  },
  {
    label: "Vendre",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </>
    ),
  },
  {
    label: "Mon espace",
    icon: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </>
    ),
  },
];

export default function CampusMarketMockup() {
  return (
    <div
      role="img"
      aria-label="Aperçu de CampusMarket Guinée, marketplace développée par Vision Amah et en phase de test : catalogue de produits de démonstration, contact des vendeurs sur WhatsApp."
      className="relative mx-auto w-[17.5rem]"
    >
      {/* Téléphone */}
      <div className="rounded-[2.75rem] border border-white/15 bg-[#0b1220] p-2.5 shadow-[0_40px_100px_-30px_rgba(2,107,222,0.55)]">
        <div className="relative flex h-[34rem] flex-col overflow-hidden rounded-[2.2rem] bg-stone-50 text-stone-900">
          {/* Barre d'état et encoche */}
          <div className="relative h-7 shrink-0 bg-white">
            <span className="absolute left-1/2 top-2 h-[1.1rem] w-20 -translate-x-1/2 rounded-full bg-black" />
          </div>

          {/* Bandeau réel du site en phase de test */}
          <p className="shrink-0 bg-amber-100 px-3 py-1 text-center text-[8.5px] leading-tight text-amber-950">
            <strong>Version de test</strong> : les produits « Démo » sont fictifs.
          </p>

          {/* En-tête : logo « c-sac » et nom */}
          <div className="flex shrink-0 items-center gap-1.5 border-b border-stone-200 bg-white px-3 py-2">
            <svg viewBox="0 0 300 300" className="h-6 w-6 shrink-0">
              <rect width="300" height="300" rx="90" fill="#c2410c" />
              <path d="M123.5 115V98a26.5 26.5 0 0 1 53 0v17" fill="none" stroke="#fff" strokeWidth="15" />
              <path
                d="M203 115h-98.5a17 17 0 0 0-17 17v73.5a17 17 0 0 0 17 17H203"
                fill="none"
                stroke="#fff"
                strokeWidth="26"
                strokeLinecap="round"
              />
              <circle cx="172.5" cy="168" r="17.5" fill="#fde68a" />
            </svg>
            <span className="text-[13px] font-bold leading-none tracking-tight">
              campus<span className="text-orange-700">market</span>
            </span>
          </div>

          <div className="flex-1 overflow-hidden px-3 pt-2.5">
            {/* Recherche */}
            <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-stone-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3 shrink-0 text-stone-500">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span className="truncate text-[10px] text-stone-500">Écouteurs, wax, calculatrice…</span>
            </div>

            {/* Catégories, défilantes comme sur mobile */}
            <ul className="-mr-3 mt-2.5 flex gap-1.5 overflow-hidden">
              {categories.map((categorie, i) => (
                <li
                  key={categorie}
                  className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[9.5px] font-semibold ring-1 ring-inset ${
                    i === 0 ? "bg-orange-700 text-white ring-orange-700" : "bg-white text-stone-700 ring-stone-300"
                  }`}
                >
                  {categorie}
                </li>
              ))}
            </ul>

            {/* Cartes produit, même mise en page que le catalogue */}
            <ul className="mt-2.5 grid grid-cols-2 gap-2">
              {produits.map((produit) => (
                <li key={produit.titre} className="overflow-hidden rounded-xl bg-white ring-1 ring-stone-200">
                  <div className="relative aspect-square">
                    <Image src={produit.photo} alt="" fill sizes="120px" className="object-cover" />
                    <span className="absolute left-1.5 top-1.5 rounded-full bg-amber-50 px-1.5 py-px text-[8.5px] font-semibold text-amber-800 ring-1 ring-inset ring-amber-200">
                      Démo
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="truncate text-[8.5px] text-stone-500">{produit.categorie}</p>
                    <p className="mt-0.5 truncate text-[10px] font-semibold leading-snug">{produit.titre}</p>
                    <p className="mt-1 text-[11px] font-extrabold text-orange-800">{produit.prix}</p>
                    <p className="truncate text-[8.5px] text-stone-500">{produit.boutique}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Barre de navigation du bas */}
          <ul className="grid shrink-0 grid-cols-5 border-t border-stone-200 bg-white px-1 pb-3 pt-1.5">
            {navigation.map((item) => (
              <li
                key={item.label}
                className={`flex flex-col items-center gap-0.5 text-[8px] font-medium ${
                  item.active ? "text-orange-700" : "text-stone-500"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={item.active ? 2.4 : 2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  {item.icon}
                </svg>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cartes flottantes : uniquement des informations vraies. Posées sur la
          2e rangée de produits, déjà coupée par la barre du bas, pour laisser
          visibles l'en-tête, la recherche et les catégories. */}
      <div className="absolute -left-3 top-[23rem] flex items-center gap-3 rounded-2xl border border-white/10 bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-24 lg:-left-16 xl:-left-24">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
          </svg>
        </span>
        <span className="flex flex-col">
          <span className="text-xs font-semibold text-white">Projet Vision Amah</span>
          <span className="text-[11px] text-white/60">Marketplace · Conakry</span>
        </span>
      </div>
      <div className="absolute -right-3 bottom-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-20 lg:-right-6 xl:-right-20">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
        </span>
        <span className="flex flex-col">
          <span className="text-xs font-semibold text-white">En phase de test</span>
          <span className="text-[11px] text-white/60">Contact vendeur via WhatsApp</span>
        </span>
      </div>
    </div>
  );
}
