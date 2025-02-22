"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes"; // Update the path to the correct location of your Theme component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Theme>
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-400 dark:bg-sky-500/70 opacity-20 blur-[100px]"></div>{" "}
          </div>
          {children}
        </Theme>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
