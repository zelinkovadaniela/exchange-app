import { FC } from 'react';
import { Box } from '@mui/material';
import { ExchangeRateType } from '../../types';

/* eslint-disable-next-line */
export interface ExchangeRateProps {
  rates: ExchangeRateType[];
}

export const ExchangeRates: FC<ExchangeRateProps> = ({ rates }) => {
  return (
    <Box>
      <h1>Welcome to ExchangeRate!</h1>
      {rates.map((rate) => (
        <div key={rate.shortName}>{rate.name}
        </div>
      ))}
    </Box>
  );
};

export default ExchangeRates;
