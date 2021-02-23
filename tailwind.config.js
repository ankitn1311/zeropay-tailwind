module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["focus", "focus-visible", "first"],
      backgroundColor: ["active"],
      translate: ["active"],
    },
  },
  plugins: [],
};
