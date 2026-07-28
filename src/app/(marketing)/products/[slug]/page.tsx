import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getProductService } from "@/features/products/services";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getProductService().getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductService().getProductBySlug(slug);

  return product
    ? { title: product.name, description: product.shortDescription }
    : { title: "Product not found" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductService().getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
              {product.category.name}
            </p>
            <p className="text-sm text-[var(--solar-amber)] mt-2">{product.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
              {product.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border-2 border-[var(--petrol-teal)] text-[var(--petrol-teal)] font-semibold rounded-sm hover:bg-[var(--petrol-teal)]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
              >
                Enquire
              </Link>
              <Link
                href="/products"
                className="inline-block px-6 py-3 text-[var(--petrol-teal)] font-semibold hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
              >
                ← Back to Products
              </Link>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="aspect-[4/3] rounded-sm bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300"
          />
        </Container>
      </section>

      {/* Specifications Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
              Specifications
            </p>
            <h2 className="mt-4 text-2xl font-bold text-[var(--midnight-navy)]">
              Product Details
            </h2>
          </div>
          <dl className="divide-y divide-slate-300 rounded-sm border border-slate-300 bg-white">
            {product.specifications.map((specification) => (
              <div className="grid gap-1 py-5 sm:grid-cols-2 px-6" key={specification.label}>
                <dt className="font-semibold text-[var(--midnight-navy)]">{specification.label}</dt>
                <dd className="text-slate-600">{specification.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--midnight-navy)] text-white py-16 sm:py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to add {product.name} to your project?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Request a quote or contact us to discuss how this product fits your needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-[var(--solar-amber)] text-white font-semibold rounded-sm hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Sales
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
