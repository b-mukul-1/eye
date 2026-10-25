import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const routes = [
    "",
    "/services",
    "/book-specialist",
    "/book",
    "/how-it-works",
    "/for-families",
    "/corporate-camps",
    "/for-practitioners",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/clinical-governance",
    "/services/amblyopia-vision-therapy",
    "/services/contact-lenses",
    "/services/prosthetic-eye",
    "/services/low-vision",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
