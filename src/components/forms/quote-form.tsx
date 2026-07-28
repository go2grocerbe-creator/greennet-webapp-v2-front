"use client";

import { useState, type FormEvent } from "react";

export function QuoteForm() {
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
        <h2 className="text-2xl font-semibold text-[var(--petrol-teal)]">
          Thank you, {formData.name || "there"}!
        </h2>
        <p className="mt-4 text-slate-600">
          We&apos;ve received your quotation request. Our team will review the details and contact you shortly with a personalized proposal.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-8 bg-white rounded-sm border border-slate-300 p-8" onSubmit={handleSubmit}>
      {/* Contact Information Section */}
      <fieldset className="border-b border-slate-200 pb-8">
        <legend className="text-lg font-semibold text-[var(--midnight-navy)] mb-6">
          Contact Information
        </legend>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-[var(--midnight-navy)]">
              Full Name *
            </label>
            <input
              id="name"
              className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-[var(--midnight-navy)]">
              Email Address *
            </label>
            <input
              id="email"
              className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
              name="email"
              placeholder="john@example.com"
              required
              type="email"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-[var(--midnight-navy)]">
              Phone Number *
            </label>
            <input
              id="phone"
              className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
              name="phone"
              placeholder="+234 (XXX) XXX-XXXX"
              required
              type="tel"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium text-[var(--midnight-navy)]">
              Company/Organization
            </label>
            <input
              id="company"
              className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
              name="company"
              placeholder="Company name (optional)"
            />
          </div>
        </div>
      </fieldset>

      {/* Project Information Section */}
      <fieldset className="border-b border-slate-200 pb-8">
        <legend className="text-lg font-semibold text-[var(--midnight-navy)] mb-6">
          Project Details
        </legend>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <label htmlFor="projectType" className="text-sm font-medium text-[var(--midnight-navy)]">
              Project Type *
            </label>
            <select
              id="projectType"
              className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
              name="projectType"
              required
            >
              <option value="">-- Select a project type --</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="agricultural">Agricultural</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="location" className="text-sm font-medium text-[var(--midnight-navy)]">
              Project Location *
            </label>
            <input
              id="location"
              className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
              name="location"
              placeholder="City, State, or Region"
              required
            />
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="energyNeeds" className="text-sm font-medium text-[var(--midnight-navy)]">
                Estimated Energy Needs
              </label>
              <select
                id="energyNeeds"
                className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
                name="energyNeeds"
              >
                <option value="">-- Select energy level --</option>
                <option value="small">Small (Residential)</option>
                <option value="medium">Medium (Small Business)</option>
                <option value="large">Large (Commercial/Industrial)</option>
                <option value="uncertain">Not Sure</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="installationTimeframe" className="text-sm font-medium text-[var(--midnight-navy)]">
                Installation Timeframe *
              </label>
              <select
                id="installationTimeframe"
                className="min-h-11 rounded-sm border border-slate-300 bg-white px-4 py-2 text-slate-900 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors"
                name="installationTimeframe"
                required
              >
                <option value="">-- Select timeframe --</option>
                <option value="immediately">Immediately (1-2 months)</option>
                <option value="soon">Soon (3-6 months)</option>
                <option value="later">Later (6-12 months)</option>
                <option value="planning">Still Planning</option>
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="interestedProducts" className="text-sm font-medium text-[var(--midnight-navy)]">
              Interested Products/Services
            </label>
            <div className="space-y-3">
              {[
                { id: "solar", label: "Solar Panels" },
                { id: "inverters", label: "Inverters" },
                { id: "battery", label: "Battery Storage" },
                { id: "monitoring", label: "Monitoring Systems" },
                { id: "evCharging", label: "EV Charging" },
              ].map((product) => (
                <div key={product.id} className="flex items-center gap-2">
                  <input
                    id={product.id}
                    type="checkbox"
                    name="interestedProducts"
                    value={product.id}
                    className="rounded border-slate-300 text-[var(--solar-amber)] focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)]"
                  />
                  <label htmlFor={product.id} className="text-sm text-slate-700">
                    {product.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      {/* Message Section */}
      <fieldset>
        <legend className="text-lg font-semibold text-[var(--midnight-navy)] mb-6">
          Additional Information
        </legend>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-[var(--midnight-navy)]">
            Project Details & Questions *
          </label>
          <textarea
            id="message"
            className="min-h-32 rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 font-normal focus-visible:outline-2 focus-visible:outline-[var(--solar-amber)] transition-colors resize-none"
            name="message"
            placeholder="Tell us more about your project, budget considerations, or specific questions..."
            required
          />
        </div>
      </fieldset>

      <button
        className="min-h-11 rounded-sm bg-[var(--solar-amber)] px-6 py-2.5 text-sm font-semibold text-[var(--midnight-navy)] hover:bg-[var(--amber-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--petrol-teal)] transition-colors"
        type="submit"
      >
        Request Quotation
      </button>

      <p className="text-xs text-slate-500 text-center">
        * Required fields. This is a client-side form for design demonstration.
      </p>
    </form>
  );
}
