import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost } from "@/data/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main id="main-content" className="bg-black">
      <Navbar />

      <section className="border-b border-white/10 bg-black pb-16 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest-plus text-accent">
            {post.tag} ·{" "}
            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingMinutes} min de lecture
          </p>
          <h1 className="text-balance text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto max-w-3xl px-6">
          <article className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="pt-4 text-2xl font-bold text-white">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-balance text-base leading-relaxed text-white/70">
                  {block.text}
                </p>
              );
            })}
          </article>

          <div className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest-plus text-accent transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Retour au blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
