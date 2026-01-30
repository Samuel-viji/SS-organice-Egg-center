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
  title: "SS Organic & Egg Center | Pure Organic Forest Products",
  description: "Authentic Mudavanatukal Kelangu, Country Chicken Eggs, and Wild Honey from SS Organic & Egg Center. Chemical-free, traditional, and sustainable.",
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
