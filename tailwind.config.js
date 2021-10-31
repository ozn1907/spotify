const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: ["*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-900-spotify": "#121212",
        "gray-800-spotify": "#181818",
        "gray-700-spotify": "#282828",
        "gray-600-spotify": "#2E2A44",
      },
      spacing: {
        200: "50rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),
    },
  },
  variants: {
    extend: {
      divideColor: ["group-hover"],
    },
  },
  plugins: [],
};
