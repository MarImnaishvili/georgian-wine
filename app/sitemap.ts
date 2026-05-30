import { MetadataRoute } from "next";
import { wines } from "@/data/wines";

const BASE_URL = "https://mildianiwine.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const wineUrls = wines.map((wine) => ({
    url: `${BASE_URL}/wines/${wine.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/wines`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...wineUrls,
  ];
}
