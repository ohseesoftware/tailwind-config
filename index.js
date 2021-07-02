const Color = require("color");
const { colors } = require("tailwindcss/defaultTheme");

const brandColors = {
  light: "#FFFFFF",
  dark: "#273240",
  primary: "#2A415E",
  secondary: "#F50A73",
  pink: "#F50A73",
  red: "#FF1E1E",
  orange: "#FC8800",
  amber: "#F59E0B",
  green: "#84CC16",
  teal: "#14B8A6",
  blue: "#3B82F6",
  indigo: "#B353FF",
};

module.exports = {
  theme: {
    colors: Object.keys(brandColors).reduce((carry, color) => {
      const hex = brandColors[color];

      carry[`brand-${color}`] = hex;
      carry[`brand-${color}-lighten`] = Color(hex).lighten(0.15).hex();
      carry[`brand-${color}-darken`] = Color(hex).darken(0.15).hex();

      return carry;
    }, {}),
  },
};
