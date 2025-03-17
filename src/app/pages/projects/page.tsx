"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Projects() {
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
          <h1 className="text-3xl">Proyectos</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
