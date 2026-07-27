import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="text-sm text-[var(--brand-primary)]">Projects</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Real work, presented with clarity.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
          Emergent can use this route to explore an editorial project layout.
          Project records should remain mocked until the existing backend model
          is reviewed.
        </p>
      </header>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {["Project case study structure", "Project outcome structure"].map((title) => (
          <article key={title} className="rounded-3xl border border-[var(--border)] bg-white p-7">
            <div className="aspect-[16/10] rounded-2xl bg-[var(--surface-muted)]" aria-hidden="true" />
            <h2 className="mt-6 text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Placeholder content for design approval only.
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
