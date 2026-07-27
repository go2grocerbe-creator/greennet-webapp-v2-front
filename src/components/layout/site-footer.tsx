import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-muted)]">
      <Container className="grid gap-8 py-12 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-md text-sm text-[var(--text-muted)]">
            Sleek frontend prototype. Final content and functionality will come
            from the existing GreenNet platform after approval.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="sm:justify-self-end">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
