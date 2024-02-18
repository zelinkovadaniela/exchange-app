import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ExchangeRateType } from '../../types';
import { ExchangeTable } from '../../components/ExchangeTable/ExchangeTable';
import dayjs from 'dayjs';

export interface ExchangeRateDetailProps {
  rates: ExchangeRateType[];
}

export const ExchangeRateDetail: FC<ExchangeRateDetailProps> = ({ rates }) => {
  const { code } = useParams();
  const selectedRate = rates.find((rate) => rate.shortName === code);

  if (!selectedRate) {
    return;
  }

  return (
    <>
      <h1>
        {selectedRate.shortName} - {selectedRate.name}
      </h1>
      <h2>Currency development – foreign exchange average</h2>
      <ExchangeTable>
        <TableRow>
          <TableCell>
            {dayjs(selectedRate.validFrom).format('DD.MM.YYYY')}
          </TableCell>
          <TableCell>{selectedRate.country}</TableCell>
          <TableCell align="center">{selectedRate.amount}</TableCell>
          <TableCell align="center">{selectedRate.currBuy}</TableCell>
          <TableCell align="center">{selectedRate.currSell}</TableCell>
          <TableCell align="center">{selectedRate.currMid}</TableCell>
          <TableCell align="center">{selectedRate.cnbMid}</TableCell>
          <TableCell align="center">{selectedRate.move}</TableCell>
        </TableRow>
      </ExchangeTable>
    </>
  );
};

export default ExchangeRateDetail;
