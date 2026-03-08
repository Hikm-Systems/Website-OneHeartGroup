import Image from "next/image";
import { aboutHighlights } from "@/lib/site-data";

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-brand-primary uppercase font-mono">
            About Us
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            About OneHeart Group
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Powering the future of wholesale distribution with innovation and excellence
          </p>
        </div>

        {/* Your Trusted Distribution Partner — text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Your Trusted Distribution Partner
            </h3>
            <p className="mt-6 leading-relaxed text-text-muted">
              At OneHeart Group, we understand that efficient distribution is the
              backbone of successful businesses. With state-of-the-art facilities,
              advanced technology, and a dedicated team, we provide comprehensive
              wholesale distribution solutions that drive growth.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Our mission is simple: to be the most reliable, efficient, and
              innovative distribution partner for brands looking to scale. We
              combine decades of logistics expertise with cutting-edge technology
              to deliver results that exceed expectations.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              From warehousing and fulfillment to supply chain management and
              e-commerce integration, we handle the complexity so you can focus on
              what you do best — building your brand.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/AI-Circular-Manufacturing-image.webp"
              alt="OneHeart Group distribution operations"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Built for Performance — image left, text right */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl order-2 lg:order-1">
            <Image
              src="/images/Distribution-Wholesale-image-1.webp"
              alt="Wholesale distribution warehouse"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Built for Performance
            </h3>
            <p className="mt-6 leading-relaxed text-text-muted">
              Our advanced warehouse management systems, real-time inventory
              tracking, and automated order processing ensure accuracy and speed
              at every step. With strategically located facilities and a
              nationwide logistics network, we deliver on time, every time.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Whether you&apos;re a growing brand or an established enterprise,
              OneHeart Group has the infrastructure, expertise, and commitment to
              support your success.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-sm font-semibold tracking-widest text-text-secondary uppercase">
            Our Core Values
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-divider bg-bg-default p-6 text-center"
              >
                <h4 className="mb-2 font-semibold text-text-primary">{item.label}</h4>
                <p className="text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
