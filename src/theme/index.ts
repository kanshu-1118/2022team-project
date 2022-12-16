import { extendTheme } from '@chakra-ui/react';

const colors = {
  orange500: '#F29A2E',
  orange300: '#F2B950',
  pink500: '#ED4076',
  pink300: '#F2798F',
  green500: '#04AFAA',
  green300: '#27CFBE',
  violet500: '#6148BE',
  violet300: '#826AD9',
  skyblue500: '#049DD9',
  skyblue300: '#36C8D9',
  red500: '#EA4242',
  red300: '#F25C5C',
  white: '#FFFFFF',
  black400: '#808080',
  black200: '#E3E3E3',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black',
      fontSize: '1.4rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
    '::selection': {
      background: 'tomato',
    },
    '::-moz-selection': {
      background: 'tomato',
    },
    pre: {
      fontFamily: 'body',
    },
  },
};
const fonts = {
  body: '"M PLUS Rounded 1c", sans-serif',
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
};
const textStyles = {
  bodyWidth: {
    width: {
      base: '90vw',
      sm: '80vw',
    },
    mx: 'auto',
  },
  start: {
    color: 'orange500',
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
