const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
 theme: {
  colors: {
   black: colors.black,
   white: colors.white,
   gray: colors.gray,
   primary: '#2A415E',
   secondary: '#CC3A5A'
  }
 },
 variants: {},
 plugins: [require('@tailwindcss/custom-forms')]
};
