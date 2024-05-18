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
        moss: "#354733",
        primaryLunarGreen: "#1A3306",
        primaryAvacado: "#8A9B6E",
        customColor: '#354733',
        borderColor: '#DDDEA0',
        textSecondary: "#808276",
        inputBorders: "#AFB2AA",
        mainBackground: "#F0F1EE",
        titulo:"#1E1E24"
      },
      backgroundImage: {
        'footer-texture': "url('./img/imgFundo.png')"
      }
    }
  },
  plugins: []
};
