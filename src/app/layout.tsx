"use client";

import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "./components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio de Alex, desarrollador web frontend y backend."
        />
        <meta
          name="keywords"
          content="Next.js, React, JavaScript, Vercel, Tutorial"
        />
        <meta name="author" content="Vercel" />
        <title>Portfolio Alex</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative text-black dark:text-white !bg-black">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 dark:bg-sky-500/70 opacity-20 blur-[100px]"></div>{" "}
        </div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pt-20">
          <Header />
          {children}
          <Footer />
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
