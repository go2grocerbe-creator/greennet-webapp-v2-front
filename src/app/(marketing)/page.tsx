import { ProductCard } from "@/features/products/components/product-card";
import { getProductService } from "@/features/products/services";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default async function HomePage() {
  const featuredProducts = await getProductService().getFeaturedProducts();

  return (
    <>
      <section className="border-b border-[var(--border)] bg-white">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand-primary)]">
              Clean GreenNet direction
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Clear energy solutions, presented with confidence.
            </h1>
          </div>
          <div>
            <p className="text-lg leading-8 text-[var(--text-muted)]">
              A frontend-first prototype focused on trust, accessibility,
              product discovery and restrained modern design.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/products">Explore products</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Start a conversation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-18 sm:py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-[var(--brand-primary)]">Featured catalogue</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Product structure ready for real data
              </h2>
            </div>
            <ButtonLink href="/products" variant="secondary">
              View all products
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-18 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            ["Clarity", "A familiar information hierarchy that helps visitors move with confidence."],
            ["Performance", "A lightweight foundation without the 3D runtime required by the immersive route."],
            ["Continuity", "A service layer prepared to consume the same GreenNet backend after approval."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-3xl bg-white p-7">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-[var(--text-muted)]">{description}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
