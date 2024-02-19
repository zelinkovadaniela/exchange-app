import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ExchangeRates,
  ExchangeRateDetail,
  ExchangeRateType,
} from '@exchange-app/exchangeRates';
import axios from 'axios';

export const App = () => {
  const [rates, setRates] = useState<ExchangeRateType[]>([]);
  const [loading, setLoading] = useState(true);
  const baseApiUrl = 'http://localhost:8080/api/exchange';

  useEffect(() => {
    console.log('App mounted');
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      let response = await axios.get(`${baseApiUrl}?usedb=1`);
      
      if (!response?.data?.length){
        response = await axios.get(`${baseApiUrl}?usedb=0`);
      }
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
    <Routes>
      <Route path="/:code" element={<ExchangeRateDetail rates={rates} />} />
      <Route path="/" element={<ExchangeRates rates={rates} />} />
    </Routes>
  );
};

export default App;
