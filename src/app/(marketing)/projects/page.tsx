import { Container } from "@/components/ui/container";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
            Projects
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
            Capability sectors & expertise areas
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our experience spans multiple sectors with proven expertise in designing and implementing solar and energy solutions.
          </p>
        </Container>
      </section>

      {/* Capability Sectors */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {[
              {
                sector: "Industrial",
                scope: "Manufacturing and production facilities",
              },
              {
                sector: "Hospitality",
                scope: "Hotels, resorts, and leisure facilities",
              },
              {
                sector: "Commercial",
                scope: "Office buildings and corporate facilities",
              },
              {
                sector: "Residential",
                scope: "Single-family and multi-unit housing",
              },
              {
                sector: "Mobility",
                scope: "EV charging and transportation infrastructure",
              },
              {
                sector: "Agriculture",
                scope: "Farms, irrigation, and rural energy",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="rounded-sm border border-slate-300 bg-white p-8 hover:border-[var(--petrol-teal)] transition-colors"
              >
                <div className="text-sm font-semibold uppercase tracking-wider text-[var(--solar-amber)]">
                  Sector
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[var(--petrol-teal)]">{item.sector}</h3>
                <p className="mt-4 text-slate-600">{item.scope}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Support Stages */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">
              Delivery & Support Stages
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Our proven approach to project delivery and ongoing support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                stage: "Discovery",
                description: "Site assessment, feasibility analysis, and project scoping.",
              },
              {
                stage: "Design",
                description: "System design, engineering, and approval documentation.",
              },
              {
                stage: "Implementation",
                description: "Installation, testing, and commissioning of systems.",
              },
              {
                stage: "Operations",
                description: "Monitoring, maintenance, and continuous optimization.",
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="rounded-sm border border-slate-300 bg-slate-50 p-6"
              >
                <div className="text-sm font-semibold uppercase tracking-wider text-[var(--solar-amber)]">
                  Stage {idx + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[var(--petrol-teal)]">{item.stage}</h3>
                <p className="mt-3 text-slate-600 text-sm">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--midnight-navy)] py-16 sm:py-24 border-t border-slate-200">
        <Container className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Explore what&apos;s possible for your project
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Contact us to discuss your specific needs and industry sector.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request Project Info
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
