import { products } from "@/mocks/products";
import type { ProductService } from "@/features/products/services/product.service";

export const mockProductService: ProductService = {
  async getProducts() {
    return products;
  },

  async getFeaturedProducts() {
    return products.filter((product) => product.featured);
  },

  async getProductBySlug(slug) {
    return products.find((product) => product.slug === slug) ?? null;
  },
};
