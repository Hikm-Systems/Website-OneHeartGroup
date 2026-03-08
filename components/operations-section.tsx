import Image from "next/image";

const operationsImages = [
  { src: "/images/1-1.webp", alt: "Distribution operations" },
  { src: "/images/63fced5f0b584bcedc82dbce_wholesale.webp", alt: "Wholesale operations" },
  { src: "/images/1-3.webp", alt: "Warehouse management" },
  { src: "/images/1759472303481.webp", alt: "Logistics operations" },
  { src: "/images/686db8d14659af06b63a3eea-1752041804038.webp", alt: "Supply chain" },
];

export default function OperationsSection() {
  return (
    <section id="gallery" className="bg-bg-default px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Operations</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            State-of-the-art facilities and streamlined processes ensure your
            products are stored, managed, and shipped with precision.
          </p>
        </div>

        {/* Image collage */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Large featured image */}
          <div className="relative overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2">
            <Image
              src={operationsImages[0].src}
              alt={operationsImages[0].alt}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Smaller images */}
          {operationsImages.slice(1).map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
