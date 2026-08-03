"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services, CATEGORIES } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Nos services
          </p>
          <h2 className="text-4xl font-bold uppercase sm:text-5xl">
            Ce que vous gagnez concrètement
          </h2>
        </motion.div>

        <div className="space-y-16">
          {CATEGORIES.map((category) => (
            <div key={category}>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest-plus text-white/40">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {services
                  .filter((service) => service.category === category && !service.hiddenFromHome)
                  .map((service, i) => (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 transition hover:border-accent/50 hover:bg-white/[0.03]"
                      >
                        <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                        <div className="p-8">
                          <h4 className="mb-3 text-lg font-semibold uppercase tracking-wide">
                            {service.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-white/60">
                            {service.summary}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
