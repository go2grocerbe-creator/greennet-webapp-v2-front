import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary"
          ? "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-strong)] focus-visible:outline-[var(--brand-primary)]"
          : "border border-[var(--border)] bg-white text-[var(--text)] hover:bg-[var(--surface-muted)] focus-visible:outline-[var(--brand-primary)]",
        className,
      )}
      {...props}
    />
  );
}
