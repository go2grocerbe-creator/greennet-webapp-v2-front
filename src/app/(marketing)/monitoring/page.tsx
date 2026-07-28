import { Container } from "@/components/ui/container";

export default function MonitoringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
            Monitoring & Support
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
            Monitor and manage your system
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Real-time visibility into your energy production with 24/7 support to keep your system running smoothly.
          </p>
        </Container>
      </section>

      {/* Dashboard Section */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">
                Cloud Dashboard & Mobile App
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Access real-time data on energy production, consumption, and system performance from anywhere. Monitor daily, weekly, and monthly trends to optimize your installation.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Real-time system monitoring and alerts",
                  "Historical data and performance analytics",
                  "Mobile app for on-the-go access",
                  "Energy production forecasting",
                  "Predictive maintenance alerts",
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-[var(--solar-amber)] font-bold">✓</span>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm bg-white border border-slate-300 aspect-video flex items-center justify-center">
              <p className="text-slate-500 text-center">
                [Dashboard mockup placeholder]
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Support Stages */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--midnight-navy)]">
              Four-Stage Support System
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Comprehensive support throughout your solar journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Pre-Installation",
                description: "System design consultation, site assessment, and project planning",
              },
              {
                number: "02",
                title: "Installation",
                description: "Professional installation with quality assurance checks",
              },
              {
                number: "03",
                title: "Commissioning",
                description: "System testing, optimization, and user training",
              },
              {
                number: "04",
                title: "Ongoing Support",
                description: "24/7 monitoring, maintenance, and technical support",
              },
            ].map((stage, idx) => (
              <article
                key={idx}
                className="rounded-sm border border-slate-300 bg-slate-50 p-6 hover:border-[var(--petrol-teal)] transition-colors"
              >
                <div className="text-3xl font-bold text-[var(--solar-amber)]">{stage.number}</div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--petrol-teal)]">{stage.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{stage.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Support Features */}
      <section className="bg-[var(--midnight-navy)] text-white py-16 sm:py-24">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Support Features</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "24/7 Technical Support",
                description: "Round-the-clock assistance for any system issues or questions.",
              },
              {
                title: "Predictive Maintenance",
                description: "AI-powered monitoring alerts potential issues before they impact performance.",
              },
              {
                title: "Performance Optimization",
                description: "Regular system reviews and optimization recommendations.",
              },
              {
                title: "Warranty Management",
                description: "[Pending approval: warranty coverage details and terms]",
              },
              {
                title: "Remote Diagnostics",
                description: "Quick troubleshooting and remote system adjustments when needed.",
              },
              {
                title: "Hardware Replacement",
                description: "[Pending approval: replacement procedures and coverage terms]",
              },
            ].map((feature, idx) => (
              <article key={idx} className="rounded-sm border border-white/20 bg-white/10 p-6">
                <h3 className="font-semibold text-[var(--solar-amber)]">{feature.title}</h3>
                <p className="mt-3 text-white/80 text-sm">{feature.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-200">
        <Container className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-[var(--midnight-navy)]">
            Schedule a monitoring demo
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See how you can monitor and manage your solar system in real-time.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/quote"
              className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)]"
            >
              Request a Demo
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
