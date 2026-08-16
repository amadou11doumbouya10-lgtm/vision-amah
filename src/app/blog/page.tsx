import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes techniques de Vision Amah : choix d'architecture, outils IA, retours d'expérience sur nos projets.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <main id="main-content" className="bg-black">
      <Navbar />
      <section className="border-b border-white/10 bg-black pb-16 pt-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            Blog
          </p>
          <h1 className="text-balance text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
            Notes techniques
          </h1>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/10 p-8 transition hover:border-accent/50 hover:bg-white/[0.03]"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent/80">
                  {post.tag} · {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })} · {post.readingMinutes} min
                </p>
                <h2 className="mb-3 text-xl font-semibold text-white transition group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-white/60">{post.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
