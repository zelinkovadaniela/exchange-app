import { FC } from 'react';
import { Box } from '@mui/material';

/* eslint-disable-next-line */
export interface ExchangeRateProps {}

export const ExchangeRates: FC<ExchangeRateProps> = (props) => {
  return (
    <Box>
      <h1>Welcome to ExchangeRate!</h1>
    </Box>
  );
}

export default ExchangeRates;
