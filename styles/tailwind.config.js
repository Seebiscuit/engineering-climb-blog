module.exports = {
  purge: {
    content: ["/**/*.njk", "/**/*.md"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "transparent",
      },
    },
  },
  variants: {},
  plugins: [],
};
