import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://renderrush.in"),
  title: {
    default: "Render Rush | Premium Creative Agency",
    template: "%s | Render Rush",
  },
  description:
    "Render Rush is a creative agency offering professional video editing, graphic design, social media management, and digital content solutions for brands and creators.",
  keywords: [
    "Render Rush",
    "Creative Agency",
    "Video Editing",
    "Motion Graphics",
    "YouTube Video Editor",
    "Reels Editor",
    "Podcast Editing",
    "Brand Storytelling",
  ],
  authors: [{ name: "Render Rush Creative Team" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Render Rush | Premium Creative Agency",
    description:
      "Render Rush is a creative agency offering professional video editing, graphic design, social media management, and digital content solutions for brands and creators.",
    url: "https://renderrush.in",
    siteName: "Render Rush",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Render Rush | Premium Creative Agency",
    description:
      "Render Rush is a creative agency offering professional video editing, graphic design, social media management, and digital content solutions for brands and creators.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen flex flex-col bg-[#0D0D10] text-[#F5F2ED] antialiased selection:bg-[#D96846] selection:text-white font-sans">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
