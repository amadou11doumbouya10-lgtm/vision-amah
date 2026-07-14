"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ProjectHeroVideo({ src, alt }: { src: string; alt: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <video
      src={src}
      autoPlay={!reducedMotion}
      muted
      loop={!reducedMotion}
      playsInline
      className="h-full w-full object-cover"
      aria-label={alt}
    />
  );
}
