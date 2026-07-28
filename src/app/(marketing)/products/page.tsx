"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/features/products/components/product-card";
import { products as allProducts } from "@/mocks/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(
    new Map(
      allProducts.map((product) => [product.category.id, product.category])
    ).values()
  ).sort((a, b) => a.name.localeCompare(b.name));

  // Filter products by category
  const filteredProducts = selectedCategory
    ? allProducts.filter((p) => p.category.id === selectedCategory)
    : allProducts;

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
            Product Catalogue
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
            Clean energy solutions for every scale
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore our comprehensive range of solar, storage, and energy management products designed for residential and commercial applications.
          </p>
        </Container>
      </section>

      {/* Category Filter Section */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <Container>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold"
                  : "bg-white text-[var(--midnight-navy)] border border-slate-300 hover:border-[var(--petrol-teal)]"
              } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold"
                    : "bg-white text-[var(--midnight-navy)] border border-slate-300 hover:border-[var(--petrol-teal)]"
                } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="rounded-sm border border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
              No products found in this category.
            </p>
          )}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--midnight-navy)] py-16 sm:py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Ready to explore clean energy?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Contact us for a consultation or request a quotation for your project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Quotation
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-[var(--solar-amber)] text-white font-semibold rounded-sm hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
