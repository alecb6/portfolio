"use client";

import { ReactNode, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Socials from "@/components/Socials";
import "./globals.css";
import Header from "@/components/Header";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, [pathname]);

  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Alex CB - Fullstack Developer Portfolio showcasing projects, skills and contact information."
        />
        <meta property="og:title" content="Alex CB Portfolio" />
        <meta
          property="og:description"
          content="Explore my web development projects and skills."
        />
        <meta
          property="og:image"
          content="https://portfolio-alexcb.vercel.app/images/og-image.png"
        />
        <meta
          name="keywords"
          content="Next.js, React, JavaScript, Vercel, Tutorial"
        />
        <meta name="author" content="Vercel" />
        <title>Alejandro CB | FullStack Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="relative text-black dark:text-white !bg-black">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 dark:bg-sky-500/70 opacity-20 blur-[100px]"></div>{" "}
        </div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center pt-20">
          <Header />
          <Socials />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
