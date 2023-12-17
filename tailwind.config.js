/* eslint-disable no-undef */
/* eslint-disable global-require */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customColor: "#e7f4f6",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
