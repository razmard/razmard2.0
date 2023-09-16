// src/gatsby-theme-material-ui-top-layout/theme.js

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#00bcff',
    },
    background: {
      paper: '#2f2f2f',
      default: '#000000',
    },
    info: {
      main: '#2196f3',
    },
    error: {
      main: '#c34a41',
    },
    white: {
      main: '#ffffff',
    },
    text: {
      primary: '#fdfdfd',
      secondary: 'rgba(206,206,206,0.7)',
      disabled: 'rgba(255,167,167,0.5)',
      hint: 'rgba(255,36,36,0.5)',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeightLight: 300,
    fontWeightRegular: 500,
    h1: {
      fontFamily: "Rubik",
      fontWeight: 700,
      color: "primary.main",
      fontSize: '3.3rem',
    },
    h2: {
      fontFamily: "Rubik",
      fontWeight: 700,
      color: "primary.main",
      fontSize: '2.7rem',
    },
    h3: {
      fontFamily: "Rubik",
      fontWeight: 700,
      color: "primary.main",
      fontSize: '2.7rem',
    },
    h4: {
      fontFamily: "Rubik",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Rubik",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Rubik",
      fontWeight: 700,
    },
    h7: {
      fontFamily: "Rubik",
      fontWeight: 700,
    },
    button: {
      fontFamily: "Rubik",
      fontWeight: 700,
    },
    a: {
      color: "primary.main"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 13,
        },
      }, 
    }, 
  },
});

export default theme;
