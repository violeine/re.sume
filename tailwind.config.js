const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "prose-80": "80ch",
      },
    },
  },
  plugins: [],
};
