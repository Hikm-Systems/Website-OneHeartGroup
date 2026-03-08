import { whyChooseUsItems } from "@/lib/site-data";
import { getIcon } from "@/components/icons";

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
            The distribution partner that combines reliability, innovation, and
            personalized service.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {whyChooseUsItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-divider bg-bg-secondary p-8 transition-all hover:border-brand-primary/40"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 rounded-xl bg-brand-primary/15 p-3 text-brand-primary">
                  {getIcon(item.icon)}
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
