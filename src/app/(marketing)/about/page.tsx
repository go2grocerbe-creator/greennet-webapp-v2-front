import { Container } from "@/components/ui/container";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
            About GreenNet
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
            About GreenNet Energy
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            [Pending approval: Company history, mission, and market positioning from GreenNet Brand Book]
          </p>
        </Container>
      </section>

      {/* Company Narrative Section */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">Our Focus</h2>
          <p className="mt-6 leading-8 text-slate-600">
            GreenNet Energy provides clean energy solutions designed to empower homes, businesses, and communities. We focus on making solar technology accessible, reliable, and beneficial for our customers and the environment.
          </p>
          <p className="mt-6 leading-8 text-slate-600">
            [Pending approval: Detailed company narrative, founding story, and strategic direction from existing brand materials]
          </p>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">Our Values</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Integrity",
                description: "Honest, transparent communication and ethical business practices in all we do.",
              },
              {
                title: "Excellence",
                description: "Commitment to quality installation, service, and continuous improvement.",
              },
              {
                title: "Sustainability",
                description: "Dedication to clean energy and environmental responsibility.",
              },
              {
                title: "Innovation",
                description: "[Pending: Core innovation disciplines and R&D focus areas]",
              },
              {
                title: "Community",
                description: "[Pending: Community engagement and social responsibility commitment]",
              },
              {
                title: "Partnership",
                description: "[Pending: Customer relationship and collaboration philosophy]",
              },
            ].map((value, idx) => (
              <article key={idx} className="rounded-sm border border-slate-300 bg-slate-50 p-8">
                <h3 className="text-lg font-semibold text-[var(--petrol-teal)]">{value.title}</h3>
                <p className="mt-4 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">Our Team</h2>
            <p className="mt-4 text-lg text-slate-600">
              [Pending: team photography and bios from GreenNet materials]
            </p>
          </div>

          <div className="rounded-sm border border-slate-300 bg-white p-12 text-center">
            <p className="text-slate-600">
              Team member profiles and photographs will be added once approved company materials are available.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-[var(--midnight-navy)] text-white py-16 sm:py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Start your clean energy journey today
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Connect with our team to discuss how we can help you transition to sustainable energy.
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
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
