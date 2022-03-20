const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./dist/index.html", "./src/input.css"],
  theme: {
    extend: {},
  },
  plugins: [require("./plugin")],
};
