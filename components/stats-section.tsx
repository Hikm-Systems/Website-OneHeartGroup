const stats = [
  { value: "10M+", label: "Products Distributed" },
  { value: "150+", label: "Brand Partners" },
  { value: "99.8%", label: "On-Time Delivery" },
  { value: "24/7", label: "Operations" },
];

export default function StatsSection() {
  return (
    <section className="bg-bg-default px-6 py-20 border-t border-b border-divider">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-brand-primary sm:text-5xl">
                {stat.value}
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
