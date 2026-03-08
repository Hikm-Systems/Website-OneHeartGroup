import Image from "next/image";

const operationsImages = [
  { src: "/images/1-3.webp", alt: "Distribution center" },
  { src: "/images/Distribution-Wholesale-image-1.webp", alt: "Wholesale distribution" },
  { src: "/images/63fced5f0b584bcedc82dbce_wholesale.webp", alt: "Wholesale operations" },
  { src: "/images/1759472303481.webp", alt: "Logistics operations" },
  { src: "/images/AI-Circular-Manufacturing-image.webp", alt: "Manufacturing" },
  { src: "/images/1-1.webp", alt: "Warehouse operations" },
];

export default function OperationsSection() {
  return (
    <section id="gallery" className="bg-bg-default px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-brand-primary uppercase font-mono">
            Gallery
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[3.125rem] md:leading-[3.5rem] tracking-tight">
            Our <span className="gradient-text">Operations</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Behind every successful delivery is a commitment to excellence,
            efficiency, and innovation.
          </p>
        </div>

        {/* 2 rows x 3 columns grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {operationsImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
