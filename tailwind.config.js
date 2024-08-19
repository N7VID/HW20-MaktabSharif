/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        "hero-homepage": "url('/public/hero-homepage.jpg')",
        "hero-signIn": "url('/public/hero-sign-in.jpg')",
      },
      fontFamily: {
        yekan: ["yekan", "serif"],
      },
    },
  },
  plugins: [],
};
