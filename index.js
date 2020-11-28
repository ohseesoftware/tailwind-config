const Color = require("color");
const { colors } = require("tailwindcss/defaultTheme");

const brandColors = {
  light: "#FFFFFF",
  dark: "#273240",
  primary: "#2A415E",
  secondary: "#DB2777",
  pink: "#DB2777",
  red: "#EF4444",
  orange: "#F97316",
  amber: "#F59E0B",
  green: "#84CC16",
  teal: "#14B8A6",
  blue: "#3C8AFF",
  indigo: "#AC6BFF",
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
