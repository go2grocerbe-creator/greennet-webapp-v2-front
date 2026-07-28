import { QuoteForm } from "@/components/forms/quote-form";
import { Container } from "@/components/ui/container";

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--petrol-teal)]">
            Quotation
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl text-[var(--midnight-navy)]">
            Request a Quotation
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tell us about your project and we&apos;ll provide a comprehensive quotation tailored to your needs.
          </p>
        </Container>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <Container className="max-w-3xl">
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}
