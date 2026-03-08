import Image from "next/image";
import { aboutContent, coreValues } from "@/lib/site-data";
import { getIcon } from "@/components/icons";

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            {aboutContent.heading}{" "}
            <span className="gradient-text">{aboutContent.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            {aboutContent.subtitle}
          </p>
        </div>

        {/* Your Trusted Distribution Partner — text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              {aboutContent.partnerSection.heading}{" "}
              <span className="gradient-text">{aboutContent.partnerSection.headingAccent}</span>
            </h3>
            {aboutContent.partnerSection.paragraphs.map((text, i) => (
              <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-text-muted`}>
                {text}
              </p>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.partnerSection.image.src}
              alt={aboutContent.partnerSection.image.alt}
              width={640}
              height={480}
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Built for Performance — image left, text right, gray rounded container */}
        <div className="mt-20 rounded-3xl bg-[#1a2028] p-8 md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={aboutContent.performanceSection.image.src}
                alt={aboutContent.performanceSection.image.alt}
                width={640}
                height={480}
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                {aboutContent.performanceSection.heading}{" "}
                <span className="gradient-text">{aboutContent.performanceSection.headingAccent}</span>
              </h3>
              {aboutContent.performanceSection.paragraphs.map((text, i) => (
                <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} leading-relaxed text-text-muted`}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values — 2x2 grid */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
            {coreValues.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-divider bg-bg-default p-8 transition-all hover:border-brand-primary/40"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                  {getIcon(item.icon)}
                </div>
                <h4 className="mb-2 text-lg font-semibold text-text-primary">
                  {item.label}
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
