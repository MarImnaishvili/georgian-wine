import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mildiani Georgian Wine | Imported Georgian Wines in USA",
    template: "%s | Mildiani Georgian Wine USA",
  },
  description:
    "Discover authentic Georgian wines by Mildiani — imported and available in the USA. Explore Saperavi, Rkatsiteli, Kindzmarauli, Tsinandali and more. Georgia's 8,000-year winemaking tradition, now in America.",
  keywords: [
    "Georgian wine USA",
    "Mildiani wine",
    "Georgian wine",
    "Saperavi wine",
    "Rkatsiteli wine",
    "Kindzmarauli",
    "Tsinandali",
    "amber wine",
    "orange wine Georgia",
    "imported Georgian wine",
    "buy Georgian wine USA",
    "Georgian wine importer",
    "Qvevri wine",
    "Kakheti wine",
  ],
  authors: [{ name: "Mildiani Wine USA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mildianiwine.com",
    siteName: "Mildiani Georgian Wine USA",
    title: "Mildiani Georgian Wine | Imported Georgian Wines in USA",
    description:
      "Authentic Georgian wines by Mildiani — imported and available across the USA. 8,000 years of winemaking tradition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mildiani Georgian Wine USA",
    description: "Authentic Georgian wines, imported and available in the USA.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#fdf8f2] text-[#1a1a1a] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
