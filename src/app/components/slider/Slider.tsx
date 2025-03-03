"use client";

import CssIcon from "../icons/CssIcon";
import HtmlIcon from "../icons/HtmlIcon";
import ReactIcon from "../icons/ReactIcon";
import PhpIcon from "../icons/PhpIcon";
import JqueryIcon from "../icons/JqueryIcon";
import JsIcon from "../icons/JsIcon";
import SqlIcon from "../icons/SqlIcon";
import LaravelIcon from "../icons/LaravelIcon";

export default function Slider() {
  const logos = [
    <CssIcon key="css" />,
    <HtmlIcon key="html" />,
    <LaravelIcon key="laravel" />,
    <JsIcon key="js" />,
    <SqlIcon key="sql" />,
    <ReactIcon key="react" />,
    <PhpIcon key="php" />,
    <JqueryIcon key="jquery" />,
  ];

  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="logos-slider flex whitespace-nowrap hover:pause-animation">
        {repeatedLogos.map((logo, index) => (
          <div
            className="logo-item flex-shrink-0 w-32 h-[4.3rem] flex justify-center items-center opacity-40 hover:opacity-100 hover:scale-125 transition-all"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>

      <style jsx>{`
        .logos-slider {
          animation: slide 15s linear infinite;
          display: flex;
          gap: 20px;
        }

        .logos-slider:hover {
          animation-play-state: paused;
        }

        .logo-item svg {
          width: 65px;
          height: auto;
        }

        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
