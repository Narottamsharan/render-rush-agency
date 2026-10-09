import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0D0D10",
          900: "#0D0D10",
          850: "#121217",
          800: "#16161D",
          700: "#1E1E26",
          600: "#272733",
          500: "#323242",
        },
        light: {
          DEFAULT: "#F5F2ED",
          100: "#FFFFFF",
          200: "#F5F2ED",
          300: "#E6E2DA",
          muted: "#82818A",
        },
        accent: {
          DEFAULT: "#D96846",
          hover: "#E87A58",
          muted: "#A84C32",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
