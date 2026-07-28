import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getProductService } from "@/features/products/services";
import { ProductCard } from "@/features/products/components/product-card";

export default async function HomePage() {
  const featuredProducts = await getProductService().getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <Container className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
              Clean Energy Solutions
            </p>
            <h1 className="mt-6 text-5xl font-bold tracking-[-0.02em] sm:text-6xl text-[var(--midnight-navy)]">
              Solar and energy solutions for a sustainable future
            </h1>
            <p className="mt-8 text-xl leading-8 text-slate-600 max-w-3xl">
              From residential homes to large industrial facilities, we provide comprehensive clean energy systems tailored to your needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
              >
                Explore Products
              </Link>
              <Link
                href="/quote"
                className="inline-block px-6 py-3 border-2 border-[var(--petrol-teal)] text-[var(--petrol-teal)] font-semibold rounded-sm hover:bg-[var(--petrol-teal)]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
              >
                Request a Quotation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* System Categories Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">Complete Energy Systems</h2>
            <p className="mt-4 text-lg text-slate-600">
              We offer a full range of products and services across seven key categories.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Solar Panels",
              "Inverters",
              "Battery Storage",
              "Monitoring Systems",
              "EV Charging",
              "Solar Carports",
              "Commercial Systems",
            ].map((category, idx) => (
              <Link
                key={category}
                href="/products"
                className="group rounded-sm border border-slate-300 bg-slate-50 p-6 hover:border-[var(--petrol-teal)] hover:bg-white transition-all"
              >
                <div className="text-2xl font-bold text-[var(--solar-amber)]">{idx + 1}</div>
                <h3 className="mt-4 font-semibold text-[var(--petrol-teal)] group-hover:text-[var(--solar-amber)] transition-colors">
                  {category}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block px-6 py-3 text-[var(--petrol-teal)] font-semibold hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
            >
              View all products →
            </Link>
          </div>
        </Container>
      </section>

      {/* Why GreenNet Section */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">Why Choose GreenNet</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Expert Design",
                description: "Professional system design optimized for your specific requirements.",
              },
              {
                number: "02",
                title: "Quality Installation",
                description: "Certified installation teams with years of industry experience.",
              },
              {
                number: "03",
                title: "Real-Time Monitoring",
                description: "24/7 cloud-based system monitoring and performance tracking.",
              },
              {
                number: "04",
                title: "Dedicated Support",
                description: "Comprehensive support throughout your system's lifecycle.",
              },
              {
                number: "05",
                title: "Scalable Solutions",
                description: "Systems designed to grow with your energy needs.",
              },
              {
                number: "06",
                title: "Transparent Process",
                description: "Clear communication and documentation at every stage.",
              },
            ].map((pillar, idx) => (
              <article key={idx} className="rounded-sm border border-slate-300 bg-white p-8">
                <div className="text-3xl font-bold text-[var(--solar-amber)]">{pillar.number}</div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--petrol-teal)]">{pillar.title}</h3>
                <p className="mt-3 text-slate-600">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Customer Journey Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">Your Solar Journey</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              From initial consultation to ongoing support, here&apos;s what to expect.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Discuss your energy goals and site conditions.",
              },
              {
                step: "2",
                title: "Assessment",
                description: "Comprehensive feasibility study and project planning.",
              },
              {
                step: "3",
                title: "Design",
                description: "Custom system design tailored to your needs.",
              },
              {
                step: "4",
                title: "Installation",
                description: "Professional installation with quality assurance.",
              },
              {
                step: "5",
                title: "Commissioning",
                description: "System testing and optimization for peak performance.",
              },
              {
                step: "6",
                title: "Support",
                description: "Ongoing monitoring, maintenance, and technical support.",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className={`rounded-sm border p-6 ${
                  idx % 2 === 0
                    ? "border-[var(--solar-amber)] bg-[var(--amber-light)]/10"
                    : "border-[var(--petrol-teal)] bg-[var(--petrol-light)]/10"
                }`}
              >
                <div className={`text-2xl font-bold ${idx % 2 === 0 ? "text-[var(--solar-amber)]" : "text-[var(--petrol-teal)]"}`}>
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-[var(--midnight-navy)]">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications Section */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">Solution Areas</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-sm border border-slate-300 bg-white p-8 hover:border-[var(--petrol-teal)] transition-colors">
              <h3 className="text-2xl font-bold text-[var(--petrol-teal)]">Commercial & Industrial</h3>
              <p className="mt-4 text-slate-600">
                Scalable solar solutions designed for manufacturing, hospitality, retail, and corporate operations. Reduce operating costs while demonstrating environmental commitment.
              </p>
              <a href="/solutions" className="mt-6 inline-block text-[var(--solar-amber)] font-semibold hover:text-[var(--amber-dark)]">
                Learn more →
              </a>
            </article>

            <article className="rounded-sm border border-slate-300 bg-white p-8 hover:border-[var(--petrol-teal)] transition-colors">
              <h3 className="text-2xl font-bold text-[var(--petrol-teal)]">Residential & Estates</h3>
              <p className="mt-4 text-slate-600">
                Complete home energy solutions for single-family properties, residential estates, and apartment buildings. Achieve energy independence and long-term savings.
              </p>
              <a href="/solutions" className="mt-6 inline-block text-[var(--solar-amber)] font-semibold hover:text-[var(--amber-dark)]">
                Learn more →
              </a>
            </article>
          </div>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
                Featured Products
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--midnight-navy)]">
                Key solutions from our catalogue
              </h2>
            </div>
            <Link href="/products" className="px-6 py-3 border-2 border-[var(--petrol-teal)] text-[var(--petrol-teal)] font-semibold rounded-sm hover:bg-[var(--petrol-teal)]/10 transition-colors whitespace-nowrap">
              View all products
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="rounded-sm border border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
              Products loading...
            </p>
          )}
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[var(--midnight-navy)] text-white py-16 sm:py-24">
        <Container className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to go solar?
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Get started with a free consultation. Our team will help you find the perfect clean energy solution for your home or business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
              Start Consultation
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
