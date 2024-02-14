import { render } from '@testing-library/react';

import { ExchangeRates } from './exchangeRates';
import { ExchangeRateDetail } from './exchangeRateDetail';

describe('ExchangeRates', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<ExchangeRates rates={[]} />);
    expect(baseElement).toBeTruthy();
    expect(getByText('Welcome to ExchangeRate!')).toBeTruthy();
  });
});

describe('ExchangeRateDetail', () => {
  it('should render successfully', () => {
    const { baseElement, getByText } = render(<ExchangeRateDetail />);
    expect(baseElement).toBeTruthy();
    expect(getByText('Welcome to ExchangeRateDetail!')).toBeTruthy();
  });
});
