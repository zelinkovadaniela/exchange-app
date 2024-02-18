import { render } from '@testing-library/react';

import { ExchangeRates } from './exchangeRates';
import { ExchangeRateDetail } from './exchangeRateDetail';

import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

describe('ExchangeRates', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(
      <MemoryRouter> {/* Use MemoryRouter instead of Router */}
        <ExchangeRates rates={[]} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
    expect(getByText('Exchange rates list')).toBeTruthy();
    expect(getByText('Currency')).toBeTruthy();
    expect(getByText('Country')).toBeTruthy();
    expect(getByText('We buy')).toBeTruthy();
    expect(getByText('We sell')).toBeTruthy();
    expect(getByText('Mid')).toBeTruthy();
    expect(getByText('CNB - mid')).toBeTruthy();
    expect(getByText('Change (%)')).toBeTruthy();
  });
});

describe('ExchangeRateDetail', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<ExchangeRateDetail />);
    expect(baseElement).toBeTruthy();
    expect(getByText('Welcome to ExchangeRateDetail!')).toBeTruthy();
  });
});
