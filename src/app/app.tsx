import { Route, Routes } from "react-router-dom";
import { ExchangeRates } from "./exchangeRates/src";
import { ExchangeRateDetail } from "./exchangeRates/src/lib";

export function App() {
  return (
    <Routes>
    <Route path="/" element={<ExchangeRates />}></Route>
    <Route path="/:code" element={<ExchangeRateDetail />}></Route>
  </Routes>
  );
}

export default App;
