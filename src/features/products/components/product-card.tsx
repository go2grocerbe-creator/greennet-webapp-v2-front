import Link from "next/link";
import type { Product } from "@/features/products/product.types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-slate-300 bg-white hover:border-[var(--petrol-teal)] hover:shadow-sm transition-all">
      <div
        aria-hidden="true"
        className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--solar-amber)]">
          {product.category.name}
        </p>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-[var(--midnight-navy)]">
          <Link
            className="hover:text-[var(--petrol-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
            href={`/products/${product.slug}`}
          >
            {product.name}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-6 text-sm font-semibold text-[var(--petrol-teal)] hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
        >
          Learn more →
        </Link>
      </div>
    </article>
  );
}
