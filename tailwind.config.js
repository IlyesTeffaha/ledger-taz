/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,html,jsx,tsx}",
  ],
  theme: {
    extend: {
         transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
            transitionDuration: {
        '2000': '2000ms',
      },
          fontFamily: {
      rubik: ["rubik", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      playfair: ['"Playfair Display"', "serif"],
    },

    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },

    screens: {
      xsm: '365px',
      sm: "426px",
      md: "834px",
      xmd: "1099px",
      lg: "1399px",
      xl: "1535px",
      "2xl": "1536px",
    },

    colors: {
      "Ita-blue": "#114653",
      "Ita-black": "#2E2D2D",
      "Ita-grey": "#D0D0D0",
      Nero: "#2E2D2D",
      ...colors,
    },
    },
  },
  plugins: [require('tailwindcss'),require('autoprefixer')],
}