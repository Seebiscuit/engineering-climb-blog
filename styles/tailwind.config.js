module.exports = {
  purge: {
    content: ["/*.njk", "/posts/**/*.md", "/about/**/*.md", "/_includes/**/*.md"],
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
