import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
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
      <section className="border-b border-[var(--border)] bg-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm text-[var(--brand-primary)]">{product.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Enquire about this product</ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                Back to catalogue
              </ButtonLink>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="aspect-[4/3] rounded-[2rem] bg-[linear-gradient(135deg,var(--surface-muted),var(--surface-accent))]"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm text-[var(--brand-primary)]">Specifications</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Structured for future catalogue data
            </h2>
          </div>
          <dl className="divide-y divide-[var(--border)] rounded-3xl border border-[var(--border)] bg-white px-6">
            {product.specifications.map((specification) => (
              <div className="grid gap-1 py-5 sm:grid-cols-2" key={specification.label}>
                <dt className="font-medium">{specification.label}</dt>
                <dd className="text-[var(--text-muted)]">{specification.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
