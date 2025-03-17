"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaJs,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaServer,
  FaCode,
  FaPhp,
} from "react-icons/fa";

type SliderItem = {
  icon: React.ElementType;
  color: string;
  name: string;
};

const techIcons: SliderItem[] = [
  { icon: FaHtml5, color: "#E44D26", name: "HTML5" },
  { icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
  { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
  { icon: FaReact, color: "#61DAFB", name: "React" },
  { icon: FaLaravel, color: "#FF2D20", name: "Laravel" },
  { icon: FaDatabase, color: "#00758F", name: "SQL" },
  { icon: FaNodeJs, color: "#339933", name: "Node.js" },
  { icon: FaGitAlt, color: "#F05032", name: "Git" },
  { icon: FaServer, color: "#6C63FF", name: "Backend" },
  { icon: FaCode, color: "#3178C6", name: "TypeScript" },
  { icon: FaPhp, color: "#777BB4", name: "PHP" },
];

export default function InfiniteSlider() {
  return (
    <div className="scroller-container w-full overflow-hidden bg-gradient-to-r from-secondary/30 to-secondary/30 py-6 my-8 rounded-lg">
      <div className="scroller flex animate-scroll">
        {techIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${index}`}
              className="scroller-item flex flex-col items-center justify-center mx-8 min-w-[80px] text-white hover:cursor-pointer"
              title={item.name}
            >
              <Icon
                size={50}
                style={{ color: item.color }}
              />
              <span className="text-xs mt-2">{item.name}</span>
            </div>
          );
        })}
        {techIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-dup-${index}`}
              className="scroller-item flex flex-col items-center justify-center mx-8 min-w-[80px] text-white"
              title={item.name}
            >
              <Icon
                size={50}
                style={{ color: item.color }}
                className="hover:scale-125 transition-all ease-in-out hover:cursor-pointer"
              />
              <span className="text-xs mt-2">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
