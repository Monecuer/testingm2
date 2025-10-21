import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.monecuer.com";

  const pages = [
    "", "about", "solutions", "products", "process", "industries",
    "portfolio", "cybersecurity", "blog", "contact", "careers", "privacy", "terms", "faq"
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changefreq: "monthly",
    priority: 0.8,
  }));
}
