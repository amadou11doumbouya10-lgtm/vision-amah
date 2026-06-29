import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Vision Amah — Solutions informatiques & IA",
  description:
    "Vision Amah conçoit des assistants IA, chatbots conversationnels, plateformes web et solutions cybersécurité sur-mesure, depuis Conakry pour l'Afrique francophone et l'international.",
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
        {children}
        <AvatarAmahWidget />
      </body>
    </html>
  );
}
