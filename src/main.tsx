import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ExchangeAppThemeProvider } from './app/theming/ExchangeAppThemeProvider';
import { Stack } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ExchangeAppThemeProvider>
      <BrowserRouter>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 1018,
            margin: '0 auto 36px',
          }}
        >
          <App />
        </Stack>
      </BrowserRouter>
    </ExchangeAppThemeProvider>
  </StrictMode>
);
