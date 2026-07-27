import { env } from "@/config/env";
import { apiProductService } from "@/features/products/services/api-product.service";
import { mockProductService } from "@/features/products/services/mock-product.service";
import type { ProductService } from "@/features/products/services/product.service";

export function getProductService(): ProductService {
  return env.dataSource === "api" ? apiProductService : mockProductService;
}
