// src/gatsby-theme-material-ui-top-layout/theme.js

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#558301',
    },
    secondary: {
      main: '#ff7106',
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
  },
  typography: {
    fontSize: 14,
    fontFamily: "Roboto Mono",
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
