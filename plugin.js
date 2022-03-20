// const svgToDataUri = require("mini-svg-data-uri");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const itozColors = {
  gray: {
    20: "#f7f7f9",
    50: "#eef0f4",
    100: "#dee2e8",
    200: "#c0c7d1",
    300: "#a6afba",
    400: "#8e98a3",
    500: "#79828c",
    600: "#646c75",
    700: "#50575e",
    800: "#3c4247",
    900: "#292d30",
  },
  green: {
    50: "#F5FFF4",
    100: "#C8EBC5",
    200: "#9ED79B",
    300: "#78C475",
    400: "#57B054",
    500: "#399C38",
    600: "#218821",
    700: "#0E7510",
    800: "#005C00",
  },
  yellow: {
    50: "#FFFDEB",
    100: "#FDF1D7",
    200: "#FCE6B6",
    300: "#F1CA75",
    400: "#DDAC43",
    500: "#BE8D21",
    600: "#986D0D",
    700: "#6F4F04",
    800: "#473301",
  },
  red: {
    50: "#FFF4F5",
    100: "#FFE7E7",
    200: "#FED4D4",
    300: "#FBAEAE",
    400: "#F68786",
    500: "#EB5F5F",
    600: "#D93A38",
    700: "#BA1C15",
    800: "#8F0A00",
  },
  blue: {
    50: "#F2FAFF",
    100: "#CAEEFE",
    200: "#99D6FD",
    300: "#69BCF9",
    400: "#3FA2F3",
    500: "#208BE9",
    600: "#0C77D8",
    700: "#0264BF",
    800: "#00529E",
  },
  orange: {
    50: "#FFF4F0",
    100: "#FFD7BB",
    200: "#FEAC7C",
    300: "#FB803F",
    400: "#F4671E",
    500: "#E7560D",
    600: "#D14904",
    700: "#AC3A01",
    800: "#782800",
  },
};
const labels = {
  ".label": {
    padding: ".6rem",
    fontSize: "1.2rem",
    borderRadius: "4px",
    backgroundColor: itozColors.gray[20],
  },
  ".label-positive": {
    backgroundColor: itozColors.green[50],
    color: itozColors.green[700],
  },
  ".label-negative": {
    backgroundColor: itozColors.red[50],
    color: itozColors.red[700],
  },
  ".label-small": {
    padding: ".4rem .5rem",
    fontSize: "1rem",
  },
};

const buttons = {
  ".btn": {
    display: "inline-block",
    padding: "1.6rem",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.6rem",
    lineHeight: 1,
    borderRadius: "9999px",
    letterSpacing: ".15rem",
    verticalAlign: "middle",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 0px 4px 4px rgba(0, 0, 0, 0)",
    transition: "box-shadow 0.15s ease",
  },
  ".btn-primary": {
    background: "linear-gradient(135deg, #427eff 0%, #f13f79 70%)",
  },
  ".btn-md": {
    fontSize: "1.4rem",
    padding: "1.2rem",
  },
  ".btn-sm": {
    fontSize: "1.2rem",
    padding: "1rem",
  },
  ".btn:hover": {
    boxShadow: "0 0px 8px 0px rgba(30, 0, 60, 0.5)",
    transition: "all 0.5s ease-in-out",
  },
};

const spinners = {
  ".spinner": {
    position: "relative",
    width: "60px",
    height: "60px",
  },
  ".spinner-lg": {
    position: "relative",
    width: "120px",
    height: "120px",
  },
  ".spinner-sm": {
    position: "relative",
    width: "24px",
    height: "24px",
  },
  ".spinner-inner": {
    boxSizing: "border-box",
    position: "relative",
    display: "inline-block",
    margin: "0",
    width: "100%",
    height: "100%",
    border: "2px solid ",
    borderRadius: "50%",
    borderColor: "transparent",
  },
  ".spinner-inner::before": {
    boxSizing: "border-box",
    left: "-2px",
    top: "-2px",
    position: "absolute",
    content: "''",
    width: "inherit",
    height: "inherit",
    border: "inherit",
    borderRadius: "inherit",
    display: "inline-block",
    borderColor: "transparent",
    borderLeftColor: "#427eff",
    borderTopColor: "#427eff",
    borderRightColor: "#427eff",
    animation: "spinner 1s infinite  linear",
  },
  ".spinner-inner::after": {
    boxSizing: "border-box",
    left: "-2px",
    top: "-2px",
    position: "absolute",
    content: "''",
    width: "inherit",
    height: "inherit",
    border: "inherit",
    borderRadius: "inherit",
    display: "inline-block",
    borderColor: "transparent",
    borderRightColor: "#f13f79",
    borderTopColor: "#f13f79",
    animation: "spinner 1.5s infinite linear",
  },
};
const lightColors = {
  ".text-light": {
    color: itozColors.gray[600],
  },
  ".bg-light": {
    backgroundColor: itozColors.gray[20],
  },
  ".border-light": {
    border: `solid 1px ${itozColors.gray[100]}`,
  },
  ".text-red-light": {
    color: itozColors.red[600],
  },
  ".bg-red-light": {
    // backgroundColor: itozColors.red[50]
    backgroundColor: colors.white,
  },
  ".border-red-light": {
    border: `solid 1px ${itozColors.red[200]}`,
  },
  ".text-green-light": {
    color: itozColors.green[600],
  },
  ".bg-green-light": {
    // backgroundColor: itozColors.green[50]
    backgroundColor: colors.white,
  },
  ".border-green-light": {
    border: `solid 1px ${itozColors.green[200]}`,
  },
  ".text-yellow-light": {
    color: itozColors.yellow[600],
  },
  ".bg-yellow-light": {
    // backgroundColor: itozColors.yellow[50]
    backgroundColor: colors.white,
  },
  ".border-yellow-light": {
    border: `solid 1px ${itozColors.yellow[200]}`,
  },
};

const defaultColors = {
  ".text-default": {
    color: itozColors.gray[700],
  },
  ".bg-default": {
    backgroundColor: itozColors.gray[50],
  },
  ".border-default": {
    border: `solid 1px ${itozColors.gray[200]}`,
  },
  ".text-red-default": {
    color: itozColors.red[700],
  },
  ".bg-red-default": {
    backgroundColor: itozColors.red[50],
  },
  ".border-red-default": {
    border: `solid 1px ${itozColors.red[300]}`,
  },
  ".text-green-default": {
    color: itozColors.green[700],
  },
  ".bg-green-default": {
    backgroundColor: itozColors.green[50],
  },
  ".border-green-default": {
    border: `solid 1px ${itozColors.green[300]}`,
  },
  ".text-yellow-default": {
    color: itozColors.yellow[700],
  },
  ".bg-yellow-default": {
    backgroundColor: itozColors.yellow[50],
  },
  ".border-yellow-default": {
    border: `solid 1px ${itozColors.yellow[300]}`,
  },
};

const darkColors = {
  ".text-dark": {
    color: itozColors.gray[800],
  },
  ".bg-dark": {
    backgroundColor: itozColors.gray[100],
  },
  ".border-dark": {
    border: `solid 1px ${itozColors.gray[500]}`,
  },
  ".text-red-dark": {
    color: itozColors.red[800],
  },
  ".bg-red-dark": {
    backgroundColor: itozColors.red[100],
  },
  ".border-red-dark": {
    border: `solid 1px ${itozColors.red[500]}`,
  },
  ".text-green-dark": {
    color: itozColors.green[800],
  },
  ".bg-green-dark": {
    backgroundColor: itozColors.green[100],
  },
  ".border-green-dark": {
    border: `solid 1px ${itozColors.green[500]}`,
  },

  ".text-yellow-dark": {
    color: itozColors.yellow[800],
  },
  ".bg-yellow-dark": {
    backgroundColor: itozColors.yellow[100],
  },
  ".border-yellow-dark": {
    border: `solid 1px ${itozColors.yellow[500]}`,
  },
};

module.exports = plugin(
  function ({ addBase, addComponents, addUtilities, theme }) {
    console.log(theme("keyframes"));
    addBase({
      html: {
        fontSize: "62.5%",
        fontFamily: `"Hiragino Kaku Gothic ProN", "Hiragino Sans","Meiryo,Arial","sans-serif"`,
      },
      body: {
        fontSize: "1.4rem",
      },
      h1: {
        fontSize: "2.8rem",
        // fontSize: "28px",
        fontWeight: "bold",
      },
      h2: {
        fontSize: "2.4rem",
        // fontSize: "24px",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "2rem",
        // fontSize: "20px",
        fontWeight: "bold",
      },
    });
    addUtilities([defaultColors, darkColors, lightColors]);
    addComponents([spinners, buttons, labels]);
  },
  {
    // darkMode: "class", // or 'media' or 'class',
    theme: {
      fontSize: {
        10: "1rem",
        11: "1.1rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        17: "1.7rem",
        18: "1.8rem",
        20: "2rem",
        22: "2.2rem",
        24: "2.4rem",
        28: "2.8rem",
        30: "3rem",
        32: "3.2rem",
        48: "4.8rem",
      },
      spacing: {
        0: "0",
        1: "0.1rem",
        5: "0.5rem",
        10: "1rem",
        12: "1.2rem",
        14: "1.4rem",
        16: "1.6rem",
        20: "2rem",
        24: "2.4rem",
        26: "2.6rem",
        28: "2.8rem",
        30: "3rem",
        32: "3.2rem",
        36: "3.6rem",
        40: "4rem",
        46: "4.6rem",
        48: "4.8rem",
        52: "5.2rem",
        60: "6rem",
        70: "7rem",
        80: "8rem",
        90: "9rem",
        100: "10rem",
        120: "12rem",
        150: "15rem",
      },
      extend: {
        colors: {
          transparent: "transparent",
          primary: {
            DEFAULT: "#0264bf",
            dark: "#00529e",
            light: "#3FA2F3",
          },
          secondary: {
            DEFAULT: itozColors.gray[20],
            dark: itozColors.gray[50],
          },
          cta: {
            DEFAULT: itozColors.orange[500],
            dark: itozColors.orange[600],
          },
          danger: {
            DEFAULT: itozColors.red[600],
            dark: itozColors.red[700],
          },
          gray: itozColors.gray,
          blue: itozColors.blue,
          yellow: itozColors.yellow,
          green: itozColors.green,
          red: itozColors.red,
          orange: itozColors.orange,
        },
        fontFamily: {
          DEFAULT: [
            "Hiragino Kaku Gothic ProN",
            "Hiragino Sans",
            "Meiryo,Arial",
            "sans-serif",
          ],
          number: ["Roboto", "sans-serif"],
        },
        keyframes: {
          spinning: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
        // borderRadius: {
        //   DEFAULT: "4px",
        // },
      },
    },
  }
);
