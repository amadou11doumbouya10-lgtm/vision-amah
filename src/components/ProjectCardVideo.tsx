"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Vidéo d'une carte de la grille Réalisations.
 *
 * La source n'est posée qu'à l'approche de la fenêtre : la grille se trouve loin
 * sous la ligne de flottaison, et un <video autoPlay> télécharge son fichier
 * immédiatement — l'attribut preload n'y change rien, puisqu'il faut bien les
 * données pour démarrer la lecture. Sans ce report, la page d'accueil tirait
 * 1,5 Mo de vidéos que le visiteur n'avait pas encore atteintes.
 */
export default function ProjectCardVideo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Marge généreuse : la vidéo est prête avant que la carte n'entre à l'écran.
      { rootMargin: "400px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="h-full w-full">
      {shouldLoad && (
        <video
          src={src}
          autoPlay={!reducedMotion}
          muted
          loop={!reducedMotion}
          playsInline
          className={className}
          aria-label={alt}
        />
      )}
    </div>
  );
}
