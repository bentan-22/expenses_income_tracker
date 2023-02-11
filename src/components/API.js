import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from "../context/GlobalState";

const API = () => {
    const { convertCurrency, setSign, sign } = useContext(GlobalContext)
    const [currencyList, setCurrencyList] = useState([]);
    const [currencyNameRatePair, setCurrencyNameRatePair] = useState({});
    const [currency, setCurrency] = useState('');
    
    useEffect(() => {
        const apiUrl = 'https://v6.exchangerate-api.com/v6/c9468b46cb86c11d8cb41d53/latest/';
        const apiUrlPlusSign = apiUrl + sign
        fetch(apiUrlPlusSign)
        .then(response => response.json())
        .then(responseData => { /* responseData is an object */
            setCurrencyNameRatePair(responseData.conversion_rates); /* conversion_rates is another object in the responseData object */
            setCurrencyList((Object.keys(responseData.conversion_rates))); /* extract the keys (currency names) */
            console.log(apiUrlPlusSign);
        });
    }, [sign]); /* useEffect every time [sign] changes */

    const handleChange = (event) => {
        const selectedCurrency = event.target.value;
        setCurrency(currencyNameRatePair[selectedCurrency]);
        convertCurrency(currencyNameRatePair[selectedCurrency]);
        setSign(selectedCurrency);
    }

    return (
        <div className='p-2 flex flex-row space-x-6'>
            <label className='font-sans text-lg'>
                Select currency
            </label>
            <div className='font-sans text-xl text-yellow-800'>
            <select 
                onChange={handleChange} 
                value={currency}
                className='bg-gray-200 font-serif text-lg text-yellow-800'
            >
                {currencyList.map(item =>(
                    <option key={uuidv4()} /* use uuid to generate a unique key */
                    value={item}>
                    {item}
                    </option>
                ))}
            </select>
            </div>
        </div>
    )
}

export default API;