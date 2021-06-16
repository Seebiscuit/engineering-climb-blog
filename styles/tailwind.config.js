module.exports = {
  purge: {
    content: [
      "./*.njk",
      "./posts/**/*.md",
      "./about/**/*.md",
      "./_includes/**/*.njk",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "transparent",
      },
      spacing: {
        192: "48rem" // 768px
      },
    },
  },
  variants: {},
  plugins: [],
};
