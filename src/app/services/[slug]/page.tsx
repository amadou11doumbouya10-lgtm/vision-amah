import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService } from "@/data/services";
import { getProject } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — Vision Amah`,
      description: service.summary,
      url: `/services/${service.slug}`,
      images: [{ url: service.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} — Vision Amah`,
      description: service.summary,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const relatedProjects = (service.relatedProjectSlugs ?? [])
    .map((slug) => getProject(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main id="main-content" className="bg-black">
      <Navbar />

      <section className="border-b border-white/10 bg-black pb-16 pt-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            {service.tag}
          </p>
          <h1 className="mb-6 text-balance text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-balance text-lg leading-relaxed text-white/70">
            {service.summary}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-block rounded-full bg-accent px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
            >
              Demander un audit gratuit
            </Link>
            <Link
              href="/#services"
              className="inline-block rounded-full border border-white/30 px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
            >
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>

          <p className="text-balance text-lg leading-relaxed text-white/70">
            {service.description}
          </p>

          <div className="mt-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest-plus text-accent">
              Ce qui est inclus
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm leading-relaxed text-white/60">
              <span className="font-semibold text-white">Sur devis</span>, adapté à votre projet
              et à votre budget. L&apos;audit gratuit de 30 minutes sert justement à ça : évaluer
              ensemble ce dont vous avez besoin avant de parler chiffres.
            </p>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-b border-white/10 bg-black py-20">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-6 text-xs font-medium uppercase tracking-widest-plus text-accent">
              Réalisé avec ce service
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projets/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition hover:border-accent/50 hover:bg-white/[0.03]"
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className={`transition duration-300 group-hover:scale-105 ${
                        project.fit === "contain" ? "object-contain p-6" : "object-cover"
                      }`}
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-widest-plus text-accent/80">
                      {project.tag}
                    </p>
                    <p className="text-sm font-semibold text-white">{project.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-black py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold uppercase sm:text-4xl">
            Discutons de votre projet
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-balance text-sm text-white/60">
            Sans engagement, sans jargon technique — un échange de 30 minutes pour identifier ce
            qui vous ferait vraiment gagner du temps.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/224611768552?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20avec%20Vision%20Amah."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-accent/85"
            >
              Réserver sur WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-block rounded-full border border-white/30 px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest-plus text-white transition hover:bg-white/10"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
