import { env } from "@/config/env";
import type { Product } from "@/features/products/product.types";
import type { ProductService } from "@/features/products/services/product.service";

function requireApiBaseUrl(): string {
  if (!env.apiBaseUrl) {
    throw new Error(
      "NEXT_PUBLIC_GREENNET_API_BASE_URL is required when data source is api.",
    );
  }

  return env.apiBaseUrl;
}

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${requireApiBaseUrl()}${path}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`GreenNet API request failed with ${response.status}.`);
  }

  return (await response.json()) as T;
}

export const apiProductService: ProductService = {
  async getProducts() {
    return request<Product[]>("/products");
  },

  async getFeaturedProducts() {
    return request<Product[]>("/products?featured=true");
  },

  async getProductBySlug(slug) {
    try {
      return await request<Product>(`/products/${encodeURIComponent(slug)}`);
    } catch (error) {
      if (error instanceof Error && error.message.includes("404")) {
        return null;
      }
      throw error;
    }
  },
};
