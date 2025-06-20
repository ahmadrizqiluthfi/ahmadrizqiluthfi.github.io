module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/img/hero-bg.jpg')", // jika kamu ingin pakai bg-hero
      },
    },
  },
  darkMode: "class", // jika kamu ingin fitur dark mode manual
  plugins: [],
};
