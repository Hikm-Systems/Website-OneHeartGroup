import Image from "next/image";
import { technologyHighlights } from "@/lib/site-data";

export default function TechnologySection() {
  return (
    <section id="technology" className="bg-brand-light px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Powered by Technology
            </h2>
            <p className="mt-2 text-sm font-semibold tracking-widest text-accent uppercase">
              Modern Infrastructure, Maximum Efficiency
            </p>
            <p className="mt-6 leading-relaxed text-gray-400">
              Our operations are built on cutting-edge technology that delivers
              speed, precision, and transparency at every touchpoint in the
              supply chain.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {technologyHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-brand p-5"
                >
                  <h3 className="mb-1 font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/AI-Circular-Manufacturing-image.webp"
              alt="AI-powered technology infrastructure"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
