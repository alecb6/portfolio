"use client";

import React from "react";
import Slider from "@/components/slider/Slider";
import Information from "@/components/profile/Information";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ClickSpark from "@/components/ui/ClickSpark";

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
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <div className="max-w-screen-sm md:max-w-none flex w-full p-4 text-center image-filter">
            <Slider />
          </div>
          <div className="text-center">
            <Information />
          </div>
        </ClickSpark>
      </motion.div>
    </AnimatePresence>
  );
}
