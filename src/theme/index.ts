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
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black',
      fontSize: '1.4rem',
      fontFamily: '"M PLUS Rounded 1c", sans-serif',
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
  },
};
const breakpoints = {
  sm: '500px',
  md: '640px',
  lg: '820px',
};
const textStyles = {
  pagenation: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '52px',
    height: '52px',
    borderRadius: '9999px',
    transition: '0.2s background',
    svg: {
      width: '40px',
      height: '40px',
      color: 'white',
    },
    '&:hover': {
      background: 'secondary',
    },
  },
  bodyWidth: {
    width: {
      base: '90vw',
      sm: '80vw',
    },
    mx: 'auto',
  },
};

const theme = extendTheme({
  styles,
  colors,
  textStyles,
  breakpoints,
});

export default theme;
