import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ExchangeAppThemeProvider } from './app/theming/ExchangeAppThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ExchangeAppThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExchangeAppThemeProvider>
  </StrictMode>
);
