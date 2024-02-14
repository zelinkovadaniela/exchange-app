import { render } from '@testing-library/react'; // Add this line

import App from './app';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><App /></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
