const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      main: "#212225",
      lightTeal: "#79ffe1",
      lightGray: "rgba(100, 100, 100, 0.5)",
      teal: "#008080"
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
      lightTeal: "#79ffe1",
      main: "#212225",
      teal: '#008080'
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
              color: "#79ffe1",
            },
            pre: {
              backgroundColor: "rgba(50, 50, 50, 1)",
              boxShadow: "5px w0px 0px 10px 10px #79ffe1",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "white",
            },
            code: {
              backgroundColor: "#000",
              color: "#79ffe1",
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
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: "#79ffe1",
            },
            pre: {
              backgroundColor: "rgba(50, 50, 50, 0.9)",
              boxShadow: "5px 10px #79ffe1",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "white",
            },
            code: {
              backgroundColor: "#000",
              color: "#79ffe1",
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
          },
        },
        lg: {
          css: {
            a: {
              color: "#79ffe1",
            },
            pre: {
              backgroundColor: "rgba(50, 50, 50, 0.9)",
              boxShadow: "5px 10px #79ffe1",
            },
            "pre code": {
              backgroundColor: "transparent",
              color: "white",
            },
            code: {
              backgroundColor: "#000",
              color: "#79ffe1",
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
