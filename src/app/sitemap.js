import { productSeries } from "@/data/productSeries";
import { productPageSlugs } from "@/data/productPages";

const SITE_URL = "https://udayaluminium.com";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/products/anchor-wire",
  "/applications",
  "/industries",
  "/form-of-supply",
  "/furnace-rods",
  "/contact",
];

export default function sitemap() {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const productPageEntries = productPageSlugs.map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const seriesEntries = productSeries.map((series) => ({
    url: `${SITE_URL}/products/${series.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productPageEntries, ...seriesEntries];
}
