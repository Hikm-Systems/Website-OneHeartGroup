const whyChooseItems = [
  {
    stat: "150+",
    statLabel: "Partners",
    title: "Partnership Approach",
    description:
      "We don't just serve clients — we build lasting partnerships rooted in mutual growth and shared success.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    stat: "99.8%",
    statLabel: "Accuracy",
    title: "Industry Expertise",
    description:
      "Decades of combined experience in wholesale distribution, supply chain, and logistics operations.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    stat: "Real-time",
    statLabel: "Tracking",
    title: "Technology-Driven",
    description:
      "Modern systems and automation that deliver speed, accuracy, and real-time visibility across operations.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    ),
  },
  {
    stat: "Flexible",
    statLabel: "Capacity",
    title: "Scalable Solutions",
    description:
      "From startups to enterprise — our infrastructure flexes to meet demand at any volume.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-bg-default px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-brand-primary uppercase font-mono">
            Why Us
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            Why Choose <span className="gradient-text">OneHeart Group?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            We go beyond distribution — delivering partnership, expertise, and
            technology that drives real results for your business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {whyChooseItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-divider bg-bg-secondary p-8 transition-all hover:border-brand-primary/40"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                  {item.icon}
                </div>
                <div>
                  <div className="mb-3">
                    <span className="text-2xl font-bold gradient-text">
                      {item.stat}
                    </span>
                    <span className="ml-1.5 text-sm font-medium text-text-muted">
                      {item.statLabel}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
