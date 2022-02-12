const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
