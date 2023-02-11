import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import moment from 'moment';

const IncomeTransaction = ({ incomeTransaction }) => {
    const { deleteIncomeTransaction, sign } = useContext(GlobalContext);
    const incomeTimeStamp = moment().format('LLL');

    return (
    <li className='pl-4 text-green-500 text-sm font-serif space-x-1'>
        <span>{incomeTimeStamp}</span>
        <span>{incomeTransaction.incomeText}</span>
        <span>{incomeTransaction.incomeCategory}</span>
        <span>{sign} {Math.abs(incomeTransaction.incomeAmount).toFixed(2)} </span>
        <button className='text-xs text-black bg-gray-200'
        onClick={() => deleteIncomeTransaction(incomeTransaction.incomeId)}>delete
        </button>
    </li>
    )
}

export default IncomeTransaction;