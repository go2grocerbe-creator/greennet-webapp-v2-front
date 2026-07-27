import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/features/products/components/product-card";
import { getProductService } from "@/features/products/services";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the GreenNet product catalogue prototype.",
};

export default async function ProductsPage() {
  const products = await getProductService().getProducts();

  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="text-sm text-[var(--brand-primary)]">Product catalogue</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Energy products, clearly organized.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
          These typed mock records will be replaced by the existing GreenNet API
          after the visual direction is approved.
        </p>
      </header>

      {products.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-12 rounded-3xl border border-[var(--border)] bg-white p-8">
          No products are available in the current data source.
        </p>
      )}
    </Container>
  );
}
