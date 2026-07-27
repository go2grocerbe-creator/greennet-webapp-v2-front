import Link from "next/link";
import type { Product } from "@/features/products/product.types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white">
      <div
        aria-hidden="true"
        className="aspect-[4/3] bg-[linear-gradient(135deg,var(--surface-muted),var(--surface-accent))]"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-[var(--brand-primary)]">{product.category.name}</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight">
          <Link
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-primary)]"
            href={`/products/${product.slug}`}
          >
            {product.name}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">
          {product.shortDescription}
        </p>
        <span className="mt-6 text-sm font-medium">View product →</span>
      </div>
    </article>
  );
}
