"use client";

export default function VideoBackground({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        aria-label={alt}
      />
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
