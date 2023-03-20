/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/app/**/*.{js,jsx,ts,tsx,vue}",
    "./src/components/**/*.{js,jsx,ts,tsx,vue}",
    "./public/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
