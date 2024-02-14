import { render } from '@testing-library/react';

import { ExchangeRates } from './exchangeRates';
import { ExchangeRateDetail } from './exchangeRateDetail';

describe('ExchangeRates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExchangeRates />);
    expect(baseElement).toBeTruthy();
  });
});

describe('ExchangeRateDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExchangeRateDetail />);
    expect(baseElement).toBeTruthy();
  });
});
