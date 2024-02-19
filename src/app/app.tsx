import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ExchangeRates,
  ExchangeRateDetail,
  ExchangeRateType,
} from '@exchange-app/exchangeRates';
import axios from 'axios';
import { Stack } from '@mui/material';

export const App = () => {
  const [rates, setRates] = useState<ExchangeRateType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('App mounted');
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/exchange`
      );
      setRates(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching rates', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
      <Routes>
        <Route path="/:code" element={<ExchangeRateDetail rates={rates} />} />
        <Route path="/" element={<ExchangeRates rates={rates} />} />
      </Routes>
    </Stack>
  );
};

export default App;
