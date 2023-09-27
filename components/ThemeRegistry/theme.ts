import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[800],
      light: blue[400],
      dark: blue[900],
    },
    secondary: grey,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 680,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      color: blue[900],
      fontSize: 37,
      fontWeight: 400,
    },
    h2: {
      color: blue[900],
      fontSize: 32,
      fontWeight: 400,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          '&.Mui-focused': {
            'backgroundColor': '#FFFFFF',
          },
        },
        input: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          'label + &': {
            marginTop: '0.6rem',
          },
          '& .MuiInputBase-input': {
            borderRadius: 4,
            border: '1px solid',
            fontSize: 16,
            padding: '10px 12px',
            '&:focus': {
              borderRadius: 4,
              borderColor: theme.palette.primary.dark,
            },
            position: 'relative',
            textAlign: 'center',
            color: theme.palette.primary.dark,
          },
        },
        select: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
  },
});

export default theme;
