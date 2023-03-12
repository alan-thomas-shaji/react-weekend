/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#313131",
        purple: "#9B0CF3",
      },
    },
  },
  plugins: [],
};
