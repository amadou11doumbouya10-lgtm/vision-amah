import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Vision Amah`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="bg-black">
      <Navbar />
      <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-black pt-24">
        <div className="absolute inset-0">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              aria-label={project.name}
            />
          ) : (
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className={project.fit === "contain" ? "object-contain p-12" : "object-cover"}
            />
          )}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,transparent_30%,black_100%)]"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            {project.tag}
          </p>
          <h1 className="text-balance text-4xl font-black uppercase leading-tight tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-6xl">
            {project.name}
          </h1>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-balance text-lg leading-relaxed text-white/70">
            {project.description}
          </p>

          {project.features && (
            <div className="mt-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest-plus text-accent">
                Fonctionnalités clés
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.pages && (
            <div className="mt-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest-plus text-accent">
                Pages / vues
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.pages.map((page) => (
                  <div
                    key={page.name}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <p className="mb-1 text-sm font-semibold text-white">{page.name}</p>
                    <p className="text-sm leading-relaxed text-white/60">
                      {page.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.architecture && (
            <div className="mt-12">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest-plus text-accent">
                Architecture
              </p>
              <pre className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-relaxed text-white/70">
                {project.architecture}
              </pre>
            </div>
          )}

          <div className="mt-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest-plus text-accent">
              Stack technique
            </p>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest-plus text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            {project.externalHref && (
              <a
                href={project.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
              >
                {project.externalLabel ?? "Voir le projet"}
              </a>
            )}
            {project.repoHref && (
              <a
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-white/30 px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
              >
                Voir le code
              </a>
            )}
            <Link
              href="/#realisations"
              className="inline-block rounded-full border border-white/30 px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
            >
              Retour aux réalisations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
