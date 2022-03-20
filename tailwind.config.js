const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./docs/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("./plugin")],
};
