"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig, navItems } from "@/lib/site-data";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-default/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-3">
        {/* Logo — left edge */}
        <a href="#home" className="relative h-[80px] w-[200px] shrink-0">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Desktop nav — centered menu links */}
        <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 rounded-full bg-white/5 backdrop-blur-sm px-2 py-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2 text-[1rem] font-medium text-text-primary transition-colors duration-250 hover:bg-bg-hover-black"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Contact Us — right edge */}
        <a
          href="#contact"
          className="hidden lg:inline-flex shrink-0 rounded-full bg-brand-primary px-6 py-2.5 text-[1rem] font-medium text-white transition-colors duration-250 hover:bg-[#dde2eb] hover:text-[#060606]"
        >
          Contact Us
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-divider bg-bg-default/95 px-6 py-4 backdrop-blur-md lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-text-primary transition-colors hover:text-brand-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-full bg-brand-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:brightness-110"
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
