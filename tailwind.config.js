/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        garamond: ["EB Garamond", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"]
      },
      colors: {
        BackgroundAboutUs: "#F0F1EE",
        moss: "#354733",
        primaryAvacado: "#8A9B6E",
        textSecondary: "#808276"
      }
    }
  },
  plugins: []
};