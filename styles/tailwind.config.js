module.exports = {
  purge: {
    content: ["/*.njk", "/posts/**/*.md", "/about/**/*.md", "/_includes/**/*.njk"],
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
