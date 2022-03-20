const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./docs/index.html", "./src/input.css"],
  theme: {
    extend: {},
  },
  plugins: [require("./plugin")],
};
