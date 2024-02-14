import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExchangeRates, ExchangeRateDetail, ExchangeRateType } from './exchangeRates/src';
import axios from 'axios';

export const App = () => {
  const apiKey = 'c52a0682-4806-4903-828f-6cc66508329e';
  const [rates, setRates] = useState<ExchangeRateType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('App mounted');
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const response = await axios.get(`https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=${apiKey}`);
      setRates(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching rates', error);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<ExchangeRates rates={rates} />}></Route>
      <Route path="/:code" element={<ExchangeRateDetail />}></Route>
    </Routes>
  );
}

export default App;
