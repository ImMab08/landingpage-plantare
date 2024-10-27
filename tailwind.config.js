/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#341F10",
        secondary: "#DCB054",
        background: "#ffffff",
        foreground: "#684E1E",
        border: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
