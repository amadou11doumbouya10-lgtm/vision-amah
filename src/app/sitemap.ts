import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://vision-amah.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projets/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...projectRoutes,
  ];
}
