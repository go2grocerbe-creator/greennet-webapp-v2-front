import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="py-16" aria-busy="true" aria-live="polite">
      <p className="text-sm text-[var(--text-muted)]">Loading GreenNet content…</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div className="h-72 animate-pulse rounded-3xl bg-[var(--surface-muted)]" key={item} />
        ))}
      </div>
    </Container>
  );
}
