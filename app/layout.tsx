import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mudavanatukal Kelangu & Malai Thenu | Pure Organic Forest Products",
  description: "Authentic Mudavanatukal Kelangu and Malai Thenu (Hill Honey) sourced directly from nature. Chemical-free, traditional, and sustainable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-beige text-forest-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
