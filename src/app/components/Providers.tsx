"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import ClickSpark from "@/components/ui/ClickSpark";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {/* Respeta "reducir movimiento" del sistema */}
      <MotionConfig reducedMotion="user">
        <ClickSpark
          sparkColor="#D9622B"
          sparkSize={10}
          sparkRadius={18}
          sparkCount={8}
          duration={420}
        >
          {children}
        </ClickSpark>
      </MotionConfig>
    </ThemeProvider>
  );
}
