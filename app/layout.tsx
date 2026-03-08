import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneHeart Group - wholesale distribution solutions",
  description:
    "OneHeart Group delivers comprehensive wholesale distribution solutions with advanced logistics, real-time inventory management, and seamless supply chain integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-default text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
