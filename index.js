const Color = require("color");
const { colors } = require("tailwindcss/defaultTheme");

const brandColors = {
  primary: "#2A415E",
  secondary: "#CC3A5A",
  red: "#F62727",
  blue: "#3C8AFF",
  green: "#00CA75",
  orange: "#FF782D",
  indigo: "#AC6BFF",
};

module.exports = {
  theme: {
    colors: Object.keys(brandColors).reduce(
      (carry, color) => {
        const hex = brandColors[color];

        carry[color] = hex;
        carry[`${color}-lighten`] = Color(hex).lighten(0.15).hex();
        carry[`${color}-darken`] = Color(hex).darken(0.15).hex();

        return carry;
      },
      {
        gray: colors.gray,
        black: "#000000",
        white: "#FFFFFF",
        dark: "#273240",
        light: "#FFFFFF",
      }
    ),
  },
};
