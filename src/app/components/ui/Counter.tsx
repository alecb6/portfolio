"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
}

// "1.520": toLocaleString("es-ES") no separa los miles en números de 4 cifras
const format = (n: number) =>
  String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Cuenta desde 0 hasta el valor cuando aparece en pantalla
export default function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  // Fuera de pantalla empieza en 0 para animarlo al aparecer
  useEffect(() => {
    if (ref.current && !reduceMotion && !inView) {
      ref.current.textContent = format(0) + suffix;
    }
    // Solo al montar
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reduceMotion) {
      node.textContent = format(value) + suffix;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, reduceMotion]);

  // Sin JavaScript (o antes de animar) se ve el valor final
  return (
    <span ref={ref} className="tabular-nums">
      {format(value) + suffix}
    </span>
  );
}
