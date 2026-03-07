import { siteConfig } from "@/lib/site-data";

export default function HeroVideo() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/1-1.webp"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/852388-hd_1920_1080_24fps-1-transcode.webm" type="video/webm" />
        <source src="/videos/852388-hd_1920_1080_24fps-1-transcode.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
          Complete distribution solutions powered by technology, built on trust,
          and designed to scale with your business.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Get Started
          </a>
          <a
            href="#solutions"
            className="rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Our Solutions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-14 w-8 rounded-full border-2 border-white/30 p-1">
          <div className="mx-auto h-3 w-1.5 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
