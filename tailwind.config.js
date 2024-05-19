/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        garamond: ["EB Garamond", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      },
      colors: {
        moss: "#354733",
        primaryLunarGreen: "#1A3306",
        primaryAvacado: "#8A9B6E",
        borderColor: '#DDDEA0',
        textSecondary: "#808276",
        inputBorders: "#AFB2AA",
        mainBackground: "#F0F1EE",
        titulo:"#1E1E24"
      },
      backgroundImage: {
        'footer-texture': "url('./assets/imgFundo.png')"
      },
      boxShadow: {
        'card': '0 7px 6px 0px rgba(41, 41, 41, 0.08)',
      },
    }
  },
  plugins: []
};
