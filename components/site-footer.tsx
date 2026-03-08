import Image from "next/image";
import { siteConfig, footerLinks } from "@/lib/site-data";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <Image src="/images/X.svg" alt="X" width={20} height={20} />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <Image src="/images/Facebook.svg" alt="Facebook" width={20} height={20} />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <Image src="/images/Instagram.svg" alt="Instagram" width={20} height={20} />
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-divider bg-bg-secondary px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand — wider column */}
          <div className="lg:col-span-4">
            <div className="relative mb-5 h-16 w-48">
              <span
                className="absolute inset-y-0 -left-3 right-3 -skew-x-6 rounded-md bg-white/90"
                aria-hidden="true"
              />
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                className="relative object-contain object-left"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              Your trusted partner for wholesale distribution and comprehensive
              supply chain solutions.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-divider text-text-muted transition-colors hover:border-brand-primary hover:text-brand-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services" className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                {siteConfig.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 border-t border-divider pt-8 text-center text-sm text-text-tertiary">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
