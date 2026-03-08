import Image from "next/image";
import { aboutHighlights } from "@/lib/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/Distribution-Wholesale-image-1.webp"
              alt="OneHeart Group distribution operations"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              About OneHeart Group
            </h2>
            <p className="mt-4 text-sm font-semibold tracking-widest text-brand-primary uppercase">
              Your Trusted Distribution Partner
            </p>
            <p className="mt-6 leading-relaxed text-text-muted">
              OneHeart Group is a technology-driven wholesale distribution
              company built for performance. We combine deep industry knowledge
              with modern infrastructure to deliver reliable, scalable solutions
              that help businesses grow.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Our commitment to excellence drives everything we do — from
              operational efficiency to partner relationships.
            </p>

            <div className="mt-10">
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-text-secondary uppercase">
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {aboutHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-divider bg-bg-default p-5"
                  >
                    <h4 className="mb-1 font-semibold text-text-primary">{item.label}</h4>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
