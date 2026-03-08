import { whyChooseUsItems } from "@/lib/site-data";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-bg-default px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why Choose OneHeart Group?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            We go beyond distribution — delivering partnership, expertise, and
            technology that drives real results for your business.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {whyChooseUsItems.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-2xl border border-divider bg-bg-secondary p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/20 text-xl font-bold text-brand-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
