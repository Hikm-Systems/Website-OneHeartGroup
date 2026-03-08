import Image from "next/image";

const coreValues = [
  {
    label: "Customer-Centric",
    description:
      "Your success is our success. We build long-term partnerships based on trust, transparency, and mutual growth.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    label: "Reliability",
    description:
      "Consistent, dependable service you can count on. We meet commitments and exceed expectations every time.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    label: "Innovation",
    description:
      "Leveraging cutting-edge technology and modern logistics solutions to stay ahead of industry trends.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
      </svg>
    ),
  },
  {
    label: "Scale",
    description:
      "Whether you're shipping 100 or 100,000 units, our infrastructure scales seamlessly with your business needs.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            About <span className="gradient-text">OneHeart Group</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Powering the future of wholesale distribution with innovation and
            excellence
          </p>
        </div>

        {/* Your Trusted Distribution Partner — text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Your Trusted{" "}
              <span className="gradient-text">Distribution Partner</span>
            </h3>
            <p className="mt-6 leading-relaxed text-text-muted">
              At OneHeart Group, we understand that efficient distribution is the
              backbone of successful businesses. With state-of-the-art
              facilities, advanced technology, and a dedicated team, we provide
              comprehensive wholesale distribution solutions that drive growth.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Our mission is simple: to be the most reliable, efficient, and
              innovative distribution partner for brands looking to scale. We
              combine decades of logistics expertise with cutting-edge technology
              to deliver results that exceed expectations.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              From warehousing and fulfillment to supply chain management and
              e-commerce integration, we handle the complexity so you can focus
              on what you do best — building your brand.
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

        {/* Built for Performance — image left, text right, gray rounded container */}
        <div className="mt-20 rounded-3xl bg-[#1a2028] p-8 md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/1759472303481.webp"
                alt="Logistics operations"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Built for{" "}
                <span className="gradient-text">Performance</span>
              </h3>
              <p className="mt-6 leading-relaxed text-text-muted">
                Our advanced warehouse management systems, real-time inventory
                tracking, and automated order processing ensure accuracy and
                speed at every step. With strategically located facilities and a
                nationwide logistics network, we deliver on time, every time.
              </p>
              <p className="mt-4 leading-relaxed text-text-muted">
                Whether you&apos;re a growing brand or an established enterprise,
                OneHeart Group has the infrastructure, expertise, and commitment
                to support your success.
              </p>
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
                  {item.icon}
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
