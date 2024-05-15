/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", 'sans-serif']
      },
      colors: {
        primaryLunarGreen: "#1A3306",
        primaryAvacado: "#8A9B6E",
      }
    },
  },
  plugins: [],
}

