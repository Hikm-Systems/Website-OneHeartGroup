import Image from "next/image";

export default function ScaleCtaBottom() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background image with dark tint */}
      <div className="absolute inset-0">
        <Image
          src="/images/63fced5f0b584bcedc82dbce_wholesale.webp"
          alt="Distribution operations"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#060606]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight text-white">
          Ready to <span className="gradient-text">Scale?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Let&apos;s discuss how OneHeart Group can power your distribution.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-lg font-medium text-white transition-colors duration-250 hover:bg-[#dde2eb] hover:text-[#060606]"
          >
            Get Started
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-lg font-medium text-white transition-colors duration-250 hover:bg-white/10"
          >
            View Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
