import Image from "next/image";
import { brandLogos } from "@/lib/site-data";

export default function LogoCarousel() {
  const doubled = [...brandLogos, ...brandLogos];

  return (
    <section className="border-y border-white/10 bg-brand-light py-12">
      <p className="mb-8 text-center text-sm font-medium tracking-widest text-gray-400 uppercase">
        Trusted by Leading Brands
      </p>
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 px-8">
          {doubled.map((logo, i) => (
            <div key={i} className="flex h-12 w-32 shrink-0 items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={48}
                className="max-h-12 w-auto object-contain brightness-0 invert opacity-60 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
