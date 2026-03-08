"use client";

import { siteConfig } from "@/lib/site-data";

export default function ContactSection() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    console.log("Form submitted:", Object.fromEntries(data));
    alert("Thanks for reaching out! We'll be in touch soon.");
    form.reset();
  }

  return (
    <section id="contact" className="bg-bg-default px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-brand-primary uppercase font-mono">
            Contact Us
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            Let&apos;s Start the{" "}
            <span className="gradient-text">Conversation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Ready to scale your distribution with OneHeart Group?
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3 rounded-2xl border border-divider bg-bg-secondary p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="rounded-xl border border-divider bg-bg-default px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-brand-primary"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="rounded-xl border border-divider bg-bg-default px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-brand-primary"
              />
            </div>
            <input
              name="company"
              type="text"
              placeholder="Company Name"
              className="w-full rounded-xl border border-divider bg-bg-default px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-brand-primary"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-divider bg-bg-default px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-brand-primary"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#dde2eb] hover:text-[#060606] sm:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-6 lg:col-span-2">
            {/* Email */}
            <div className="rounded-2xl border border-divider bg-bg-secondary p-6">
              <div className="mb-3 inline-flex rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-text-primary">Email Us</h3>
              <p className="text-sm text-text-muted mb-2">Send us an email anytime</p>
              <p className="text-sm text-brand-primary">{siteConfig.email}</p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-divider bg-bg-secondary p-6">
              <div className="mb-3 inline-flex rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-text-primary">Call Us</h3>
              <p className="text-sm text-text-muted mb-2">Available for inquiries</p>
              <p className="text-sm text-brand-primary">{siteConfig.phone}</p>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-divider bg-bg-secondary p-6">
              <div className="mb-3 inline-flex rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-text-primary">Location</h3>
              <p className="text-sm text-text-muted mb-2">Serving businesses nationwide</p>
              <p className="text-sm text-brand-primary">{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
