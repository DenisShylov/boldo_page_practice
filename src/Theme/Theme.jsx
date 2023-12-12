import { createTheme } from '@mui/material';

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1500,
    },
  },
  typography: {
    biggest: {
      fontFamily: ['Manrope', 'Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '96px',
      fontWeight: 400,
    },
    big: {
      fontFamily: ['Manrope', 'Open Sans', 'Roboto', 'sans-serif'].join(','),
      fontSize: '64px',
      fontWeight: 400,
    },
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
      fontSize: '13px',
      fontWeight: 400,
      color: '#FFF',
    },
    subtitle2: {
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
        lightest: '#777',
        light: '  #F1F1F1',
      },
      green: {
        main: '#4FE9A4',
      },
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 300,
          boxShadow: 'none',
        },
      },
    },
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
          fontFamily: 'Open Sans',
          fontWeight: 700,
          fontSize: '20px',
          textTransform: 'none',
          padding: '16px 56px',
          borderRadius: '24px',
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: '354px',
          borderRadius: '24px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          color: '#0A2640',
          width: '50%',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          width: '150px',
          textAlign: 'left',
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
