import { commitmentItems } from "@/lib/site-data";
import { getIcon } from "@/components/icons";

export default function CommitmentSection() {
  return (
    <section id="commitment" className="bg-bg-secondary px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-brand-primary uppercase font-mono">
            Our Promise
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            Our <span className="gradient-text">Commitment</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Building lasting partnerships through excellence, reliability, and
            innovation.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {commitmentItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-divider bg-bg-default p-8 transition-all hover:border-brand-primary/40"
            >
              <div className="mb-4 inline-flex rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                {getIcon(item.icon)}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
