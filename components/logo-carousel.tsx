import Image from "next/image";
import { brandLogos } from "@/lib/site-data";

export default function LogoCarousel() {
  // Triple the logos for seamless infinite scroll (original uses 3 copies)
  const tripled = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section aria-label="Trusted brand partners" className="bg-bg-default py-8">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12">
          {tripled.map((logo, i) => (
            <div key={i} className="flex shrink-0 items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={120}
                loading="lazy"
                className="h-[120px] w-auto max-w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
