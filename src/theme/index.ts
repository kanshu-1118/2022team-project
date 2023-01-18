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
  black300: '#B3B3B3',
  black200: '#E3E3E3',
  cream: '#FFFEF8',
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
  startNickname: {
    width: '224px',
    height: '224px',
    background: 'white',
    fontSize: '5rem',
    borderStyle: 'solid',
    borderWidth: '6px',
    borderRadius: '16px',
    textAlign: 'center',
  },
  startAge: {
    width: '200px',
    height: '184px',
    color: 'orange500',
    borderRadius: '16px',
    fontSize: '12rem',
  },
  boxHeadingTemplate: {
    fontSize: '2.4rem',
    textAlign: 'center',
  },
  boxInsideTemplate: {
    gap: '20px',
    width: '100%',
    background: 'cream',
    borderRadius: '16px',
    position: 'relative',
    zIndex: '3',
  },
  boxBgTemplate: {
    width: 'calc(100% + 20px)',
    height: 'calc(100% + 28px + 4px)',
    borderWidth: '4px',
    borderStyle: 'solid',
    borderRadius: '28px',
    position: 'absolute',
    inset: 'calc(-28px / 2) auto auto calc(-20px / 2)',
  },
  modalTemplate: {
    
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
