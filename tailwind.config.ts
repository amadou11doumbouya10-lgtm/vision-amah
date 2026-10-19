import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      // text-accent utilise une variante plus claire, lisible en petit sur le
      // fond sombre ; bg-accent et border-accent gardent l'accent de la marque.
      textColor: {
        accent: "rgb(var(--accent-text) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
