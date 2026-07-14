import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AvatarAmahWidget from "@/components/AvatarAmahWidget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://vision-amah.vercel.app";
const title = "Vision Amah — Solutions informatiques & IA";
const description =
  "Vision Amah conçoit des assistants IA, chatbots conversationnels, plateformes web et solutions cybersécurité sur-mesure, depuis Conakry pour l'Afrique francophone et l'international.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Vision Amah",
  },
  description,
  keywords: [
    "Vision Amah",
    "intelligence artificielle",
    "chatbot IA",
    "développement web",
    "cybersécurité",
    "Conakry",
    "Guinée",
  ],
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Vision Amah",
    title,
    description,
    images: [{ url: "/logo.svg", width: 1200, height: 630, alt: "Vision Amah" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vision Amah",
  description,
  url: siteUrl,
  image: `${siteUrl}/logo.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Conakry",
    addressCountry: "GN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Aller au contenu
        </a>
        {children}
        <AvatarAmahWidget />
      </body>
    </html>
  );
}
