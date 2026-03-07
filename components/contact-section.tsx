"use client";

import { siteConfig } from "@/lib/site-data";

export default function ContactSection() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Placeholder — wire to API route or server action later
    console.log("Form submitted:", Object.fromEntries(data));
    alert("Thanks for reaching out! We'll be in touch soon.");
    form.reset();
  }

  return (
    <section id="contact" className="bg-brand px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s Start the Conversation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
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
                className="rounded-xl border border-white/10 bg-brand-light px-5 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-accent"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="rounded-xl border border-white/10 bg-brand-light px-5 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-accent"
              />
            </div>
            <input
              name="company"
              type="text"
              placeholder="Company Name"
              className="w-full rounded-xl border border-white/10 bg-brand-light px-5 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-accent"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-brand-light px-5 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-widest text-gray-300 uppercase">
                Email Us
              </h3>
              <p className="text-gray-400">{siteConfig.email}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-widest text-gray-300 uppercase">
                Call Us
              </h3>
              <p className="text-gray-400">{siteConfig.phone}</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-widest text-gray-300 uppercase">
                Location
              </h3>
              <p className="text-gray-400">{siteConfig.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
