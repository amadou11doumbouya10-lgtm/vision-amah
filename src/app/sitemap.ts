import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const siteUrl = "https://vision-amah.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projets/${project.slug}`,
    lastModified: new Date(),
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      priority: 0.8,
    },
    ...serviceRoutes,
    ...projectRoutes,
  ];
}
