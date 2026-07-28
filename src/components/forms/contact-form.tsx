"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const nameInput = formElement.querySelector('input[name="name"]') as HTMLInputElement;
    setFormData({ name: nameInput?.value || "" });
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      formElement.reset();
    }, 3000);
  }

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="rounded-sm border border-[var(--petrol-teal)] bg-[var(--petrol-light)]/10 p-8 text-center"
      >
        <h2 className="text-xl font-semibold text-[var(--petrol-teal)]">
          Thank you, {formData.name || "there"}!
        </h2>
        <p className="mt-3 text-slate-600">
          We&apos;ve received your message. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-6 bg-white rounded-sm border border-slate-300 p-8" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-[var(--midnight-navy)]">
        Send us a message
      </h2>

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-[var(--midnight-navy)]">
          Name
        </label>
        <input
          id="name"
          className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-[var(--midnight-navy)]">
          Email
        </label>
        <input
          id="email"
          className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
          name="email"
          placeholder="your@email.com"
          required
          type="email"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-[var(--midnight-navy)]">
          Subject
        </label>
        <input
          id="subject"
          className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
          name="subject"
          placeholder="What is this about?"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--midnight-navy)]">
          Message
        </label>
        <textarea
          id="message"
          className="min-h-32 rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors resize-none"
          name="message"
          placeholder="Tell us more..."
          required
        />
      </div>

      <button
        className="min-h-11 rounded-sm bg-[var(--solar-amber)] px-6 py-2.5 text-sm font-semibold text-[var(--midnight-navy)] hover:bg-[var(--amber-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)] transition-colors"
        type="submit"
      >
        Send Message
      </button>

      <p className="text-xs text-slate-500 text-center">
        This is a client-side form for design demonstration. Production implementation will connect to GreenNet&apos;s enquiry system.
      </p>
    </form>
  );
}
