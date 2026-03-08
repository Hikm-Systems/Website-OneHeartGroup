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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s Start the{" "}
            <span className="gradient-text">Conversation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Ready to scale your distribution? Get in touch and let&apos;s build
            something great together.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="rounded-xl border border-divider bg-bg-secondary px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none focus:border-brand-primary"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="rounded-xl border border-divider bg-bg-secondary px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none focus:border-brand-primary"
              />
            </div>
            <input
              name="company"
              type="text"
              placeholder="Company Name"
              className="w-full rounded-xl border border-divider bg-bg-secondary px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none focus:border-brand-primary"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-divider bg-bg-secondary px-5 py-3.5 text-sm text-text-primary placeholder:text-text-tertiary outline-none focus:border-brand-primary"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:brightness-110 sm:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-widest text-text-secondary uppercase">
                Email Us
              </h3>
              <p className="text-text-muted">{siteConfig.email}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-widest text-text-secondary uppercase">
                Call Us
              </h3>
              <p className="text-text-muted">{siteConfig.phone}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-widest text-text-secondary uppercase">
                Location
              </h3>
              <p className="text-text-muted">{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
