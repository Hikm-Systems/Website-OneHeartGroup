import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Heart Group",
  description: "One Heart Group - Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
