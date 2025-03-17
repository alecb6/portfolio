import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Portfolio Clone | FullStack Developer Portfolio",
  description:
    "Portfolio Clone - Fullstack Developer Portfolio showcasing projects, skills and contact information.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://alecb6.github.io/portfolio",
    siteName: "Portfolio Clone | FullStack Developer Portfolio",
    title: "Portfolio Clone | FullStack Developer Portfolio",
    description:
      "Portfolio Clone - Fullstack Developer Portfolio showcasing projects, skills and contact information.",
    images: [
      {
        url: "https://alecb6.github.io/portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Clone | FullStack Developer Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps) {

  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className=" bg-primary dark:bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Header />
        <main className="container mx-auto px-4 py-4">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
