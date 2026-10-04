import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: "2024-09-01", changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/kosodate/`, lastModified: "2024-09-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kosodate/photo/`, lastModified: "2024-09-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/`, lastModified: "2024-09-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy/`, lastModified: "2024-09-01", changeFrequency: "yearly", priority: 0.3 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/${a.category}/${a.theme}/guide/${a.slug}/`,
    lastModified: a.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // /lp/ routes are excluded from the sitemap intentionally
  return [...staticRoutes, ...articleRoutes];
}
