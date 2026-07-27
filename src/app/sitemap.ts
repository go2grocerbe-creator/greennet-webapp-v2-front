import type { MetadataRoute } from "next";
import { env } from "@/config/env";
import { getProductService } from "@/features/products/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.siteUrl;
  const products = await getProductService().getProducts();
  const routes = ["", "/products", "/projects", "/about", "/contact"];

  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}` })),
    ...products.map((product) => ({ url: `${baseUrl}/products/${product.slug}` })),
  ];
}
