const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      main: "#212225",
      teal: "#008080",
      lightGray: "rgba(100, 100, 100, 0.5)",
    }),
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: "#008080",
      main: "#212225",
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
            h2: {
              color: "white",
            },
            h3: {
              color: "white",
            },
            strong: {
              color: "white",
            },
            a: {
              color: "#008080",
            },
            pre: {
              backgroundColor: "rgba(50, 50, 50, 0.9)",
              border: "1px solid #008080",
            },
            "pre code": {
              backgroundColor: "transparent",
            },
            code: {
              backgroundColor: "#808080",
              color: "white",
              padding: "5px",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            blockquote: {
              color: "white",
              backgroundColor: "#003030",
            },
            "img:hover": {
              transform: "scale(1.2)",
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: "#008080",
            },
            pre: {
              backgroundColor: "rgba(50, 50, 50, 0.9)",
              border: "1px solid #008080",
            },
            "pre code": {
              backgroundColor: "transparent",
            },
            code: {
              backgroundColor: "#808080",
              color: "white",
              padding: "5px",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            blockquote: {
              color: "white",
              backgroundColor: "#003030",
            },
            "img:hover": {
              transform: "scale(1.2)",
            },
          },
        },
        xl: {
          css: {
            a: {
              color: "#008080",
            },
            pre: {
              backgroundColor: "rgba(50, 50, 50, 0.9)",
              border: "1px solid #008080",
            },
            "pre code": {
              backgroundColor: "transparent",
            },
            code: {
              backgroundColor: "#808080",
              color: "white",
              padding: "5px",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            blockquote: {
              color: "white",
              backgroundColor: "#003030",
            },
            "img:hover": {
              transform: "scale(1.2)",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
