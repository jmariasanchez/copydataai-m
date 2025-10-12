import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jose Sanchez | Polymath | Founder of joluAI - Autonomous AI COO",
  description: "Jose Sanchez is a polymath exploring the intersection of technology, philosophy, and business. Software engineer and founder of joluAI—an autonomous AI operator that runs company backends: emails, meetings, and decisions. AI COO that never forgets, never sleeps, and always optimizes.",
  keywords: ["Jose Sanchez", "polymath", "joluAI", "AI COO", "autonomous AI", "AI operator", "software engineer", "founder", "AI automation", "business automation", "technology philosophy", "interdisciplinary"],
  authors: [{ name: "Jose Sanchez" }],
  creator: "Jose Sanchez",
  openGraph: {
    title: "Jose Sanchez | Polymath | Founder of joluAI",
    description: "Polymath exploring technology, philosophy, and business. Building joluAI—an autonomous AI operator that runs your company's backend. Emails, meetings, decisions.",
    url: "https://copydataai.com",
    siteName: "Jose Sanchez",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Sanchez | Polymath | Founder of joluAI",
    description: "Polymath exploring technology, philosophy, and business. Building joluAI—an autonomous AI operator that runs your company's backend.",
    creator: "@copydataaireal",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
