import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOLO — AI Cinematic Creative Director",
  description:
    "Generate cinema-grade prompts for Runway, MidJourney, Pika, Luma, Sora, and more. Professional cinematic direction powered by UCPL — Unified Cinematic Prompt Language.",
  keywords:
    "AI cinematic prompts, Runway AI, MidJourney prompt generator, Pika Labs, Luma AI, Sora prompts, UCPL, cinematic AI, AI creative director, AI video generation",
  authors: [{ name: "SCITY SYSTEMS OÜ" }],
  openGraph: {
    title: "SOLO — AI Cinematic Creative Director",
    description:
      "Cinema-grade prompts for 9 AI platforms. From idea to director-level scene in seconds.",
    url: "https://solo-engine.com",
    siteName: "SOLO Engine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SOLO Engine — The Symbiosis of Artificial Intelligence and High Art",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLO — AI Cinematic Creative Director",
    description:
      "Cinema-grade prompts for 9 AI platforms. Professional direction in seconds.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}