"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { useState, useEffect, useRef } from "react";

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Close mobile nav when Escape is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && detailsRef.current) {
        detailsRef.current.open = false;
        setMobileNavOpen(false);
      }
    };

    if (mobileNavOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileNavOpen]);

  const handleMobileNavClick = () => {
    setMobileNavOpen(false);
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  const handleDetailsToggle = (e: React.ChangeEvent<HTMLDetailsElement>) => {
    setMobileNavOpen(e.currentTarget.open);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--midnight-navy)]">
      <Container className="flex min-h-16 items-center justify-between gap-6 py-3">
        <Link
          className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/quote"
          className="hidden px-5 py-2 text-sm font-semibold text-[var(--midnight-navy)] bg-[var(--solar-amber)] rounded-sm transition-colors hover:bg-[var(--amber-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:inline-block"
        >
          Request a Quotation
        </Link>

        <details
          ref={detailsRef}
          onChange={handleDetailsToggle}
          className="relative lg:hidden"
        >
          <summary className="cursor-pointer rounded-sm border border-white/20 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--solar-amber)]">
            Menu
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-12 z-20 w-56 rounded-sm border border-white/10 bg-[var(--midnight-navy)] p-4 shadow-xl"
          >
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-sm px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)]"
                    href={item.href}
                    onClick={handleMobileNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-white/10 pt-2 mt-2">
                <Link
                  className="block rounded-sm px-3 py-2 text-sm font-medium text-[var(--midnight-navy)] bg-[var(--solar-amber)] transition-colors hover:bg-[var(--amber-dark)] focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)]"
                  href="/quote"
                  onClick={handleMobileNavClick}
                >
                  Request a Quotation
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </Container>
    </header>
  );
}
