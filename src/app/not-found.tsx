import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm text-[var(--brand-primary)]">404</p>
      <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-[var(--text-muted)]">
        The requested prototype page does not exist or its content is not yet available.
      </p>
      <ButtonLink className="mt-8" href="/">
        Return home
      </ButtonLink>
    </Container>
  );
}
