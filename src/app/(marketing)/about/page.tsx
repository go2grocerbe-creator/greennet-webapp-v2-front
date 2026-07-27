import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="text-sm text-[var(--brand-primary)]">About GreenNet</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          A calmer way to communicate innovation.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
          This page is a structural placeholder for approved company history,
          purpose, capabilities and market positioning. It deliberately avoids
          inventing facts that should come from the existing GreenNet content.
        </p>
      </div>
    </Container>
  );
}
