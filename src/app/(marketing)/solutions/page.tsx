import { Container } from "@/components/ui/container";

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
            Solutions
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
            Solutions for every scale
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            From residential homes to large industrial facilities, we provide tailored solar and energy solutions.
          </p>
        </Container>
      </section>

      {/* Commercial & Industrial */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">
              Commercial & Industrial
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Scalable solar installations designed to reduce operational costs and carbon footprint for businesses of all sizes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Manufacturing Facilities",
                description: "High-capacity solar systems supporting energy-intensive production operations.",
              },
              {
                title: "Hospitality & Retail",
                description: "Commercial solar solutions for hotels, malls, and retail centers.",
              },
              {
                title: "Agricultural Operations",
                description: "Solar-powered solutions for farms, irrigation systems, and agricultural processing.",
              },
              {
                title: "Office & Corporate",
                description: "Sustainable energy for office buildings and corporate headquarters.",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="rounded-sm border border-slate-300 bg-white p-8 hover:border-[var(--petrol-teal)] transition-colors"
              >
                <h3 className="text-xl font-semibold text-[var(--petrol-teal)]">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Residential & Estates */}
      <section className="bg-[var(--petrol-dark)] text-white py-16 sm:py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold">
              Residential & Estates
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Complete solar solutions for homeowners, providing energy independence and long-term savings.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Single-Family Homes",
                description: "Rooftop solar systems perfect for individual residential properties.",
              },
              {
                title: "Residential Estates",
                description: "Community-scale solar installations for residential complexes and developments.",
              },
              {
                title: "Apartment Buildings",
                description: "Shared solar infrastructure solutions for multi-unit residential buildings.",
              },
              {
                title: "Rural Properties",
                description: "Off-grid and hybrid solar solutions for remote or underserved areas.",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="rounded-sm border border-white/20 bg-white/10 p-8 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold text-[var(--solar-amber)]">{item.title}</h3>
                <p className="mt-3 text-white/80">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-200">
        <Container className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-[var(--midnight-navy)]">
            Find the right solution for your needs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Contact our team to discuss which solution works best for your project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
            >
              Get Your Solution
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-[var(--petrol-teal)] text-[var(--petrol-teal)] font-semibold rounded-sm hover:bg-[var(--petrol-teal)]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
            >
              Talk to Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
