"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * This component renders the knowledge page, which is a page that is
 * displayed when the user navigates to the knowledge route.
 *
 * The component uses the usePathname hook to get the current path, and
 * the useEffect hook to scroll to the top of the page when the path
 * changes.
 *
 * The component returns a div with an h1 element inside it, which is
 * centered and has a font size of 3xl.
 */

export default function Knowledge() {
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
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-12">
          <h1 className="text-3xl">Conocimiento</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
