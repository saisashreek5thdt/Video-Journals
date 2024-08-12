/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./assets/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBG: "url('/assets/images/bg/Journal.png')",
      },
    },
    fontFamily: {
      Manrope: ["Manrope"],
    },
  },
  plugins: [],
};
