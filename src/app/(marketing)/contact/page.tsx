import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
      <header>
        <p className="text-sm text-[var(--brand-primary)]">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Start a clear conversation.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
          The current form simulates submission locally. Production delivery
          will reuse GreenNet&apos;s existing enquiry workflow.
        </p>
      </header>
      <ContactForm />
    </Container>
  );
}
