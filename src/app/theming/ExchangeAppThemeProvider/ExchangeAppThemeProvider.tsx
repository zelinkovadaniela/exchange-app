import { CssBaseline } from '@mui/material';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import { FC, PropsWithChildren } from 'react';
import { exchangeAppThemes } from '../themes/exchangeAppThemes';

export interface ExchangeAppThemeProviderProps extends PropsWithChildren {
  theme?: Theme;
}

const theme = createTheme(exchangeAppThemes.light);

export const ExchangeAppThemeProvider: FC<ExchangeAppThemeProviderProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
