/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "homeBG": "url('/assets/images/bg/Journal.png')"
      }
    },
    fontFamily: {
      "Manrope": ["Manrope"]
    }
  },
  plugins: [],
}

