"use client";

import React, { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
}

// Tarjeta con un foco de luz cálido que sigue al ratón
const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgb(var(--accent) / 0.14), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
