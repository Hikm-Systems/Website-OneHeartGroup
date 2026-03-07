import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneHeart Group | Wholesale Distribution Built for Scale",
  description:
    "OneHeart Group delivers end-to-end wholesale distribution, supply chain management, and logistics solutions built for performance and scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand text-white antialiased">{children}</body>
    </html>
  );
}
