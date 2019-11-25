const Color = require('color');
const { colors } = require('tailwindcss/defaultTheme');

const primmary = '#2A415E';
const secondary = '#CC3A5A';

module.exports = {
 theme: {
  colors: {
   black: colors.black,
   white: colors.white,
   gray: colors.gray,
   dark: '#0B121B',
   light: '#F8FAFC',
   primary: primary,
   'primary-lighten': Color(primray).lighten(15),
   'primary-darken': Color(primray).darken(15),
   secondary: secondary,
   'secondary-lighten': Color(secondary).lighten(15),
   'secondary-darken': Color(secondary).darken(15)
  }
 },
 plugins: [require('@tailwindcss/custom-forms')]
};
