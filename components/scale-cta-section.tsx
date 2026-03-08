import Image from "next/image";
import { ctaTop } from "@/lib/site-data";

export default function ScaleCtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={ctaTop.backgroundImage}
          alt="Wholesale distribution warehouse"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#060606]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight text-white">
          {ctaTop.heading}{" "}
          <span className="gradient-text">{ctaTop.headingAccent}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          {ctaTop.description}
        </p>
        <a
          href={ctaTop.cta.href}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-lg font-medium text-white transition-colors duration-250 hover:bg-[#dde2eb] hover:text-[#060606]"
        >
          {ctaTop.cta.label}
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
