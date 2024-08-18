/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-homepage": "url('/public/hero-homepage.jpg')",
      },
      fontFamily: {
        yekan: ["yekan", "serif"],
      },
    },
  },
  plugins: [],
};
