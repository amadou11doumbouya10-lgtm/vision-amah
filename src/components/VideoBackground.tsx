"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function VideoBackground({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority || shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-black">
      {shouldLoad && (
        <video
          src={src}
          autoPlay={!reducedMotion}
          muted
          loop={!reducedMotion}
          playsInline
          preload={priority ? "auto" : "metadata"}
          className="h-full w-full object-cover"
          aria-label={alt}
        />
      )}
      <div className="absolute inset-0 bg-black/35" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_35%,rgba(0,0,0,0.7)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55)_0%,transparent_25%,transparent_70%,black_100%)]"
        aria-hidden
      />
    </div>
  );
}
