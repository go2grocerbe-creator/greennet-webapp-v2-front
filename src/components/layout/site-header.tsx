import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--border)] bg-white/95">
      <Container className="flex min-h-18 items-center justify-between gap-6 py-3">
        <Link
          className="text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-primary)]"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-primary)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer rounded-full border border-[var(--border)] px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]">
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 z-20 w-56 rounded-2xl border border-[var(--border)] bg-white p-3 shadow-lg"
          >
            <ul className="space-y-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-xl px-3 py-2 text-sm hover:bg-[var(--surface-muted)] focus-visible:outline-2 focus-visible:outline-[var(--brand-primary)]"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </Container>
    </header>
  );
}
