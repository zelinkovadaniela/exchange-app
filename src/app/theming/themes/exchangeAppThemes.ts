import { ThemeOptions } from '@mui/material';

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      dark: 'rgb(6, 78, 161)',
      main: '#2870ed',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f6fa',
      paper: 'rgb(228, 234, 240)'
    },
    text: {
      primary: '#303030',
      secondary: '#0b1f42',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Inter,sans-serif',
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'secondary' && {
              color: '#fff',
            }),
        }),
      },
    }
  }
};

export const exchangeAppThemes = {
  light: lightThemeOptions,
};
