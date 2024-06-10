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
        green: {
          DEFAULT: "#9DC08B",
          50: "#EDF1D6",
          100: "#E4EBC6",
          200: "#C8D89F",
          300: "#ACCA78",
          400: "#91BD51",
          500: "#609966",
          600: "#4A7D4D",
          700: "#345134",
          800: "#1E352B",
          900: "#40513B",
          950: "#2A3A2F",
        },

      }
    },
    plugins: [],
  }
};
export default config;
