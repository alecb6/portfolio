"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    { src: "/images/html.png", alt: "HTML" },
    { src: "/images/css.png", alt: "CSS" },
    { src: "/images/js.png", alt: "JavaScript" },
    { src: "/images/jQuery.png", alt: "jQuery" },
    { src: "/images/php.png", alt: "PHP" },
    { src: "/images/laravel.png", alt: "Laravel" },
    { src: "/images/sql.png", alt: "SQL" },
    { src: "/images/react.png", alt: "React" },
    { src: "/images/node.png", alt: "Node.js" },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const speed = 1.5;
    const intervalTime = 16;

    const interval = setInterval(() => {
      if (!slider) return;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += speed;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className="flex gap-4 whitespace-nowrap overflow-x-scroll scroll-smooth hide-scrollbar"
      >
        {images.map((img, index) => (
          <div key={index} className="h-[100px] w-[100px] flex-shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              width={100}
              height={100}
              priority={true}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
        {images.map((img, index) => (
          <div
            key={`dup-${index}`}
            className="h-[100px] w-[100px] flex-shrink-0"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={100}
              height={100}
              priority={true}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Ocultar barra de scroll para navegadores Webkit */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Ocultar scrollbar en Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
