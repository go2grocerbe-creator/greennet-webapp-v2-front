import type { Product } from "@/features/products/product.types";

export interface ProductService {
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
}
