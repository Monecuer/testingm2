import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.monecuer.com";

const routes: string[] = [
  "",
  "/about",
  "/solutions",
  "/products",
  "/process",
  "/industries",
  "/portfolio",
  "/cybersecurity",
  "/pricing",
  "/blog",
  "/contact",
  "/careers",
  "/privacy",
  "/terms",
  "/faq",
  "/founder", // founder page you already have
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
