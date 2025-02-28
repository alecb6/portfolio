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
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex gap-4 whitespace-nowrap overflow-x-scroll scroll-smooth hide-scrollbar">
        <CssIcon />
        <HtmlIcon />
        <LaravelIcon />
        <JsIcon />
        <SqlIcon />
        <ReactIcon />
        <PhpIcon />
        <JqueryIcon />
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
        .svg {
          height: 65px;
          width: auto;
        }
      `}</style>
    </div>
  );
}
