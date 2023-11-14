import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    h1: {
      fontFamily: ['Manrope', 'Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '48px',
      fontWeight: 400,
    },
    h2: {
      fontFamily: ['Manrope', 'Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '36px',
      fontWeight: 400,
    },
    h3: {
      fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '24px',
      fontWeight: 400,
    },
    h4: {
      fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '20px',
      fontWeight: 400,
    },
    h5: {
      fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '16px',
      fontWeight: 400,
    },
    h6: {
      fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '14px',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '12px',
      fontWeight: 400,
      color: '#FFF',
    },
  },
  palette: {
    success: {
      main: '#65E4A3',
    },
    background: {
      default: '#FFF',
    },
    text: {
      white: '#FFF',
      blue: {
        dark: '#0A2640',
      },
      grey: {
        light: '#F1F1F1',
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: '56px 100px 0 100px',
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '16px',
          padding: 0,
          borderRadius: '24px',
        },
      },
    },
  },
  mixins: {
    toolbar: {
      '@media (min-width:600px)': {
        padding: 0,
      },
    },
  },
});
