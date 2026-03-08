import { heroContent } from "@/lib/site-data";

export default function HeroVideo() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroContent.video.poster}
        className="absolute inset-0 h-full w-full rounded-[2rem] object-cover"
      >
        {heroContent.video.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>

      {/* Dark overlay — 40% opacity matching original */}
      <div className="absolute inset-0 bg-bg-default/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
    </section>
  );
}
