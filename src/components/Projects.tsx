"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="realisations" className="border-t border-white/10 bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Réalisations
          </p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">
            Des projets concrets, déjà déployés
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Link
                href={`/projets/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition hover:border-accent/50 hover:bg-white/[0.03]"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      aria-label={project.name}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className={`transition duration-300 group-hover:scale-105 ${
                        project.fit === "contain" ? "object-contain p-6" : "object-cover"
                      }`}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between p-8">
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent/80">
                    {project.tag}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
