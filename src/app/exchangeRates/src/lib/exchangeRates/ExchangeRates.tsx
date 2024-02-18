import { FC } from 'react';
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { ExchangeRateType } from '../../types';
import { useNavigate } from 'react-router-dom';

export interface ExchangeRateProps {
  rates: ExchangeRateType[];
}

export const ExchangeRates: FC<ExchangeRateProps> = ({ rates }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1018,
        margin: '0 auto 36px',
      }}
    >
      <h1 style={{ color: 'text.secondary' }}>Exchange rates list</h1>
      <Table sx={{ border: '1px solid rgb(212, 213, 214)' }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'primary.dark' }}>
            <TableCell color="secondary">Currency</TableCell>
            <TableCell color="secondary">Country</TableCell>
            <TableCell align="center" color="secondary">
              Quantity
            </TableCell>
            <TableCell align="center" color="secondary">
              We buy
            </TableCell>
            <TableCell align="center" color="secondary">
              We sell
            </TableCell>
            <TableCell align="center" color="secondary">
              Mid
            </TableCell>
            <TableCell align="center" color="secondary">
              CNB - mid
            </TableCell>
            <TableCell align="center" color="secondary">
              Change (%)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </Stack>
  );
};

export default ExchangeRates;
