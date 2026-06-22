import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9a84c',
      light: '#e8d5a3',
      dark: '#9a7d35',
    },
    secondary: {
      main: '#7a1525',
    },
    background: {
      default: '#050008',
      paper: 'rgba(6, 2, 10, 0.88)',
    },
    text: {
      primary: '#f0e8d5',
      secondary: 'rgba(240, 232, 213, 0.6)',
    },
    divider: 'rgba(201, 168, 76, 0.25)',
  },
  typography: {
    fontFamily: '"Crimson Text", Georgia, serif',
    fontSize: 16,
    h1: { fontFamily: '"IM Fell English", serif' },
    h2: { fontFamily: '"IM Fell English", serif' },
    h3: { fontFamily: '"IM Fell English", serif' },
    h4: { fontFamily: '"IM Fell English", serif' },
    h5: { fontFamily: '"IM Fell English", serif' },
    h6: { fontFamily: '"IM Fell English", serif' },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(6, 2, 10, 0.85)',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(201, 168, 76, 0.25)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#c9a84c',
          },
        },
      },
    },
  },
});
