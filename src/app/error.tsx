"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto max-w-2xl px-5 py-20">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-4 text-[var(--text-muted)]">
            The prototype could not load this view.
          </p>
          <button
            className="mt-7 rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-white"
            onClick={reset}
            type="button"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
