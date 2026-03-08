const stats = [
  {
    value: "10M+",
    label: "Products Distributed",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V5c0-1.1-1-3-2-3zm-5 12H9v-2h6v2zm5-7H4V5h16v2z" />
      </svg>
    ),
  },
  {
    value: "150+",
    label: "Brand Partners",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    value: "99.8%",
    label: "On-Time Delivery",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Operations",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="bg-bg-default px-6 py-20 border-t border-b border-divider">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                {stat.icon}
              </div>
              <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="gradient-text">{stat.value}</span>
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-text-muted uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
