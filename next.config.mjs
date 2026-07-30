/** @type {import('next').NextConfig} */

// Widget Avatar Amah : chargé en iframe et sollicité par le warm-up.
const AVATAR_AMAH_ORIGIN = "https://legendary-selkie-d298b7.netlify.app";

// En production, Vercel Analytics sert son script et son beacon en same-origin
// (/_vercel/insights/*). Le domaine ci-dessous ne sert qu'au script de debug
// utilisé sur les déploiements de préversion.
const VERCEL_ANALYTICS_ORIGIN = "https://va.vercel-scripts.com";

const contentSecurityPolicy = [
  "default-src 'self'",
  // 'unsafe-inline' est nécessaire : Next.js App Router injecte des scripts inline
  // pour l'hydratation, et le JSON-LD est lui aussi inline. S'en passer imposerait
  // un middleware à nonce, qui rendrait chaque page dynamique — coûteux pour un
  // site statique. La directive bloque malgré tout tout script d'origine externe.
  `script-src 'self' 'unsafe-inline' ${VERCEL_ANALYTICS_ORIGIN}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self'",
  `connect-src 'self' https://formspree.io ${AVATAR_AMAH_ORIGIN} ${VERCEL_ANALYTICS_ORIGIN}`,
  `frame-src ${AVATAR_AMAH_ORIGIN}`,
  // Empêche l'inclusion du site dans une iframe tierce (clickjacking, hameçonnage
  // par usurpation de marque). C'est l'équivalent moderne de X-Frame-Options.
  "frame-ancestors 'none'",
  "form-action 'self' https://formspree.io",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Évite d'annoncer la stack technique dans chaque réponse HTTP.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
