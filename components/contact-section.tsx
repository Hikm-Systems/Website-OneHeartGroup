"use client";

import { siteConfig, contactInfo } from "@/lib/site-data";
import { getIcon } from "@/components/icons";

const contactValues: Record<string, string> = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  location: siteConfig.location,
};

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
            {contactInfo.map((info) => (
              <div key={info.key} className="rounded-2xl border border-divider bg-bg-secondary p-6">
                <div className="mb-3 inline-flex rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                  {getIcon(info.icon, "h-6 w-6")}
                </div>
                <h3 className="mb-1 font-semibold text-text-primary">{info.title}</h3>
                <p className="text-sm text-text-muted mb-2">{info.subtitle}</p>
                <p className="text-sm text-brand-primary">{contactValues[info.key]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
