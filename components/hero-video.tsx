"use client";

import { useEffect, useRef } from "react";
import { heroContent } from "@/lib/site-data";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const inner = section.querySelector<HTMLDivElement>("[data-hero-inner]");
    if (!inner) return;

    function onScroll() {
      if (!inner) return;
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      // progress 0 → 1 over the first viewport height of scroll
      const progress = Math.min(scrollY / windowH, 1);

      // Scale from 1 down to 0.92
      const scale = 1 - progress * 0.08;
      // Border radius grows from 0 to 2rem as it shrinks
      const radius = progress * 32; // 32px = 2rem

      inner.style.transform = `scale(${scale})`;
      inner.style.borderRadius = `${radius}px`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial call

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" ref={sectionRef} className="sticky top-0 h-screen overflow-hidden">
      <div
        data-hero-inner=""
        className="absolute inset-0 h-full w-full overflow-hidden will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroContent.video.poster}
          aria-label="OneHeart Group wholesale distribution operations background video"
          className="absolute inset-0 h-full w-full object-cover"
        >
          {heroContent.video.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-bg-default/40" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="mx-auto max-w-4xl px-6 text-center">
            {/* Pill badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4d4d4d4c] bg-[#1a1a1ab3] px-4 py-2 text-sm font-medium text-[#fafafa] backdrop-blur-[12px]">
              <span className="h-2 w-2 rounded-full bg-brand-primary" />
              {heroContent.badge}
            </div>

            <h1 className="text-5xl font-bold leading-[1] tracking-tight sm:text-6xl md:text-7xl lg:text-[72px]">
              {heroContent.heading}
              <span className="gradient-text block">{heroContent.headingAccent}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[672px] text-lg leading-relaxed text-text-muted sm:text-xl">
              {heroContent.description}
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={heroContent.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand-purple px-6 py-2.5 text-sm font-medium text-[#fafafa] shadow-lg transition-all hover:brightness-125"
              >
                {heroContent.primaryCta.label}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/30 bg-transparent px-6 py-2.5 text-sm font-medium text-[#fafafa] transition-all hover:bg-white/10"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
