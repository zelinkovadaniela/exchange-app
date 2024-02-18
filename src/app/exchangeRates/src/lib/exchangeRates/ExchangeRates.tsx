import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { ExchangeRateType } from '../../types';
import { useNavigate } from 'react-router-dom';
import { ExchangeTable } from '../../components/ExchangeTable/ExchangeTable';

export interface ExchangeRateProps {
  rates: ExchangeRateType[];
}

export const ExchangeRates: FC<ExchangeRateProps> = ({ rates }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ color: 'text.secondary' }}>Exchange rates list</h1>
      <ExchangeTable>
        {rates.map((rate) => (
          <TableRow
            key={rate.shortName}
            sx={{
              cursor: 'pointer',
              '&:hover': { backgroundColor: 'background.paper' },
            }}
            onClick={() => navigate(`/${rate.shortName}`)}
          >
            <TableCell>
              {rate.shortName} - {rate.name}
            </TableCell>
            <TableCell>{rate.country}</TableCell>
            <TableCell align="center">{rate.amount}</TableCell>
            <TableCell align="center">{rate.currBuy}</TableCell>
            <TableCell align="center">{rate.currSell}</TableCell>
            <TableCell align="center">{rate.currMid}</TableCell>
            <TableCell align="center">{rate.cnbMid}</TableCell>
            <TableCell align="center">{rate.move}</TableCell>
          </TableRow>
        ))}
      </ExchangeTable>
    </>
  );
};

export default ExchangeRates;
