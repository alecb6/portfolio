"use client";

import React from "react";
import Slider from "@/components/slider/Slider";
import Information from "@/components/profile/Information";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * HomePage component renders the main page of the application.
 *
 * It uses the `usePathname` hook to determine the current path and
 * the `useEffect` hook to scroll to the top of the page smoothly
 * whenever the path changes.
 *
 * The main content is wrapped in an `AnimatePresence` and `motion.div`
 * to provide animation effects on page load and change.
 *
 * Inside the component, a `Slider` component is displayed with a
 * custom image filter and an `Information` component is displayed
 * below it, both centered using flexbox.
 *
 * The animation configuration includes a fade-in effect from below
 * with a duration of 0.4 seconds.
 */

export default function HomePage() {
  const currentPage = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        <div className="max-w-screen-sm md:max-w-none flex w-full p-4 text-center image-filter">
          <Slider />
        </div>
        <div className="text-center">
          <Information />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
