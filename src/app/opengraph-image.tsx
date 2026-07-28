import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vision Amah — Solutions informatiques & IA";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#3b82f6",
          }}
        />

        {/* wordmark */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            fontSize: 22,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          VISION AMAH
        </div>

        {/* headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.05,
            textTransform: "uppercase",
            letterSpacing: -2,
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          Solutions IA &amp; Web
        </div>

        {/* tagline */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.55)",
            fontWeight: 400,
            maxWidth: 680,
            marginBottom: 48,
          }}
        >
          Assistants IA, chatbots, plateformes web et cybersécurité — depuis Conakry pour l&apos;Afrique francophone et l&apos;international.
        </div>

        {/* CTA pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#3b82f6",
            borderRadius: 999,
            padding: "14px 32px",
            fontSize: 18,
            fontWeight: 700,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          Audit IA gratuit
        </div>
      </div>
    ),
    { ...size }
  );
}
