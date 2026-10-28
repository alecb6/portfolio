import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

interface LayoutProps {
  children: ReactNode;
}

const title = "Alejandro Cruz Ballestero | Desarrollador web full stack";
const description =
  "Portfolio de Alejandro Cruz Ballestero, desarrollador web full stack en Madrid: proyectos como OpoAlertas, experiencia, conocimientos y contacto.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portfolio-alexcb.vercel.app",
    siteName: title,
    title,
    description,
    images: [
      {
        url: "https://portfolio-alexcb.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5EFE6" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1713" },
  ],
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <a
            href="#proyectos"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-on"
          >
            Saltar a los proyectos
          </a>
          <Header />
          <main>{children}</main>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
