const Color = require('color');
const { colors } = require('tailwindcss/defaultTheme');

const primary = '#2A415E';
const secondary = '#CC3A5A';

module.exports = {
 theme: {
  colors: {
   black: colors.black,
   white: colors.white,
   gray: colors.gray,
   blue: colors.blue,
   red: colors.red,
   dark: '#0B121B',
   light: '#F8FAFC',
   primary: primary,
   'primary-lighten': Color(primary)
    .lighten(0.15)
    .hex(),
   'primary-darken': Color(primary)
    .darken(0.15)
    .hex(),
   secondary: secondary,
   'secondary-lighten': Color(secondary)
    .lighten(0.15)
    .hex(),
   'secondary-darken': Color(secondary)
    .darken(0.15)
    .hex()
  }
 }
};
