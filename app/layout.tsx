import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.oneheartgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "OneHeart Group | Wholesale Distribution & Brand Growth Solutions",
  description:
    "OneHeart Group powers brand growth through scalable wholesale distribution, supply chain management, and logistics solutions with 99.8% on-time delivery.",
  keywords: [
    "wholesale distribution",
    "brand growth",
    "supply chain management",
    "logistics solutions",
    "e-commerce fulfillment",
    "B2B distribution",
    "inventory management",
    "wholesale supplier",
    "distribution partner",
    "order fulfillment",
  ],
  authors: [{ name: "OneHeart Group" }],
  creator: "OneHeart Group",
  publisher: "OneHeart Group",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "OneHeart Group",
    title: "OneHeart Group | Wholesale Distribution & Brand Growth Solutions",
    description:
      "Scalable wholesale distribution and supply chain solutions that drive brand growth. 150+ brand partners, 10M+ products distributed, 99.8% on-time delivery.",
    images: [
      {
        url: "/images/Distribution-Wholesale-image-1.webp",
        width: 1200,
        height: 630,
        alt: "OneHeart Group wholesale distribution warehouse operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneHeart Group | Wholesale Distribution & Brand Growth",
    description:
      "Scalable wholesale distribution and supply chain solutions that drive brand growth. 150+ brand partners, 99.8% on-time delivery.",
    images: ["/images/Distribution-Wholesale-image-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OneHeart Group",
    url: siteUrl,
    logo: `${siteUrl}/images/Website_Logo-removebg-preview.png`,
    description:
      "OneHeart Group delivers comprehensive wholesale distribution solutions with advanced logistics, real-time inventory management, and seamless supply chain integration.",
    email: "info@oneheartgroup.com",
    telephone: "+1 (234) 200-8087",
    areaServed: "US",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-200-8087",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OneHeart Group",
    url: siteUrl,
    description:
      "Wholesale distribution and brand growth solutions with advanced logistics and supply chain management.",
    publisher: {
      "@type": "Organization",
      name: "OneHeart Group",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
      </head>
      <body className="bg-bg-default text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
