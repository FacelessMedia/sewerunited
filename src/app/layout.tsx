import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BUSINESS } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Professional Plumbing, Sewer & Drain Services in Chicago`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  keywords: [
    "plumbing services chicago",
    "sewer repair chicago",
    "drain cleaning chicago",
    "hydro jetting",
    "flood control",
    "emergency plumber chicago",
    "United Sewer and Drains",
  ],
  openGraph: {
    title: `${BUSINESS.name} | Professional Plumbing Services`,
    description: BUSINESS.description,
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
