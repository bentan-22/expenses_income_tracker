import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from "../context/GlobalState";

const API = () => {
  const { convertCurrency, setSign, sign } = useContext(GlobalContext);
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyNameRatePair, setCurrencyNameRatePair] = useState({});
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_KEY;
    const apiUrlPlusSign = `${apiUrl}${sign}`;
    fetch(apiUrlPlusSign)
      .then(response => response.json())
      .then(responseData => {
        const { conversion_rates } = responseData;
        setCurrencyNameRatePair(conversion_rates);
        setCurrencyList(Object.keys(conversion_rates));
      });
  }, [sign]);

  const handleChange = event => {
    const selectedCurrency = event.target.value;
    setCurrency(currencyNameRatePair[selectedCurrency] || '');
    convertCurrency(currencyNameRatePair[selectedCurrency] || {});
    setSign(selectedCurrency);
  };

  const renderCurrencyOptions = () => (
    currencyList.map(item => (
      <option key={uuidv4()} value={item}>
        {item}
      </option>
    ))
  );

  return (
    <div>
      <label htmlFor="currency-select">Select currency</label>
      <div>
        <select
          id="currency-select"
          value={currency}
          onChange={handleChange}
        >
          {renderCurrencyOptions()}
        </select>
      </div>
    </div>
  );
};

export default API;