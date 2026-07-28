import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
            Contact
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have questions about our products or services? Reach out to our team and we&apos;ll be happy to help.
          </p>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] max-w-4xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--midnight-navy)] mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--petrol-teal)]">
                    Email
                  </p>
                  <p className="mt-2 text-slate-700">
                    [Pending approval: contact email]
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--petrol-teal)]">
                    Phone
                  </p>
                  <p className="mt-2 text-slate-700">
                    [Pending approval: phone number]
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--petrol-teal)]">
                    Address
                  </p>
                  <p className="mt-2 text-slate-700">
                    [Pending approval: office address]
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--petrol-teal)]">
                    Hours
                  </p>
                  <p className="mt-2 text-slate-700">
                    [Pending approval: business hours]
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--midnight-navy)] text-white py-16 sm:py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready for a quotation?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Use our quotation form to provide project details and requirements.
          </p>
          <div className="mt-8">
            <a
              href="/quote"
              className="inline-block px-6 py-3 bg-[var(--solar-amber)] text-[var(--midnight-navy)] font-semibold rounded-sm hover:bg-[var(--amber-dark)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Go to Quotation Form
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
