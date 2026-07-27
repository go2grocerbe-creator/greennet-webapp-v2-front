"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="rounded-3xl border border-[var(--border)] bg-[var(--surface-accent)] p-6"
      >
        <h2 className="text-xl font-semibold">Prototype submission complete</h2>
        <p className="mt-2 text-[var(--text-muted)]">
          No message was sent. The approved version will connect this form to
          the existing GreenNet enquiry workflow.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-medium">
        Name
        <input
          className="min-h-11 rounded-xl border border-[var(--border)] bg-white px-4 py-2 font-normal focus-visible:outline-2 focus-visible:outline-[var(--brand-primary)]"
          name="name"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Email
        <input
          className="min-h-11 rounded-xl border border-[var(--border)] bg-white px-4 py-2 font-normal focus-visible:outline-2 focus-visible:outline-[var(--brand-primary)]"
          name="email"
          required
          type="email"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          className="min-h-36 rounded-xl border border-[var(--border)] bg-white px-4 py-3 font-normal focus-visible:outline-2 focus-visible:outline-[var(--brand-primary)]"
          name="message"
          required
        />
      </label>
      <button
        className="min-h-11 justify-self-start rounded-full bg-[var(--brand-primary)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--brand-primary-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)]"
        type="submit"
      >
        Send enquiry
      </button>
    </form>
  );
}
