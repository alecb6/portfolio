import type { Config } from "tailwindcss";

// Colores definidos como canales RGB en globals.css para poder usar opacidad (bg-accent/20)
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        ink: token("ink"),
        muted: token("muted"),
        line: token("line"),
        ochre: token("ochre"),
        accent: {
          DEFAULT: token("accent"),
          ink: token("accent-ink"),
          soft: token("accent-soft"),
          on: token("on-accent"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        wave: "wave 2.2s ease-in-out 0.6s 1",
      },
    },
  },
  plugins: [],
} satisfies Config;
