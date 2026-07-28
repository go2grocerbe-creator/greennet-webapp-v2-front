import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--midnight-navy)] text-white">
      {/* Main footer content */}
      <Container className="grid gap-12 py-16 md:grid-cols-4 md:gap-8">
        {/* Company Info */}
        <div className="md:col-span-1">
          <p className="text-lg font-semibold text-[var(--solar-amber)]">{siteConfig.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Clean energy solutions for homes and businesses.
          </p>
        </div>

        {/* Products & Solutions */}
        <nav aria-label="Products navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Products
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/products"
                className="text-white/70 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className="text-white/70 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
              >
                Solutions
              </Link>
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/projects"
                className="text-white/70 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white/70 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/monitoring"
                className="text-white/70 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
              >
                Monitoring & Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Legal & Contact */}
        <nav aria-label="Legal navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/contact"
                className="text-white/70 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/quote"
                className="text-white/70 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
              >
                Request Quote
              </Link>
            </li>
          </ul>
        </nav>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-center text-sm text-white/60 md:flex-row md:justify-between md:text-left">
          <p>&copy; {currentYear} {siteConfig.name} Energy Ltd. All rights reserved.</p>
          <p>Frontend prototype for design collaboration. Final content pending approval.</p>
        </Container>
      </div>
    </footer>
  );
}
