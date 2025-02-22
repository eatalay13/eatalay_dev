import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        editor: {
          bg: "#1E1E1E",
          line: "#2D2D2D",
          text: "#D4D4D4",
          comment: "#6A9955",
          keyword: "#569CD6",
          string: "#CE9178",
          function: "#DCDCAA",
          variable: "#9CDCFE",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        code: ["var(--font-fira)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
