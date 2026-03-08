import { commitmentItems } from "@/lib/site-data";

export default function CommitmentSection() {
  return (
    <section id="commitment" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Commitment</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Numbers that reflect our dedication to excellence in every aspect of
            wholesale distribution.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitmentItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-divider bg-bg-default p-8 text-center"
            >
              <div className="mb-2 text-4xl font-bold text-brand-primary">
                {item.value}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
