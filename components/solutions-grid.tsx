import { serviceCards } from "@/lib/site-data";

/* Material-Design-style filled icons matching the original site */
const icons: Record<string, React.ReactNode> = {
  warehouse: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 20h-4v-4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v4H4V10l8-6 8 6v10zM12 1L2 9v12c0 .55.45 1 1 1h6v-5h6v5h6c.55 0 1-.45 1-1V9L12 1z" />
    </svg>
  ),
  chart: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
    </svg>
  ),
  globe: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
    </svg>
  ),
  truck: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  ),
};

export default function SolutionsGrid() {
  return (
    <section id="services" className="bg-bg-default px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-brand-primary uppercase font-mono">
            Our Services
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            Complete Distribution{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted text-lg">
            Comprehensive services designed to streamline your supply chain and accelerate growth
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-divider bg-bg-secondary p-7 transition-all hover:border-brand-primary/40"
            >
              <div className="mb-5 inline-flex rounded-xl bg-brand-purple/20 p-3.5 text-brand-primary">
                {icons[card.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-text-muted">
                {card.description}
              </p>
              <ul className="space-y-2.5">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                    <svg className="h-4 w-4 shrink-0 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
