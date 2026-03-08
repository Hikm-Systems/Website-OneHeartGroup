import Image from "next/image";

export default function ScaleCtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Distribution-Wholesale-image-1.webp"
          alt="Wholesale distribution warehouse"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#060606]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight text-white">
          Ready to Scale Your{" "}
          <span className="gradient-text">Distribution?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Partner with OneHeart Group for reliable, efficient wholesale
          distribution solutions.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-lg font-medium text-white transition-colors duration-250 hover:bg-[#dde2eb] hover:text-[#060606]"
        >
          Schedule Consultation
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
