import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import moment from 'moment/moment';

const ExpenseTransaction = ({ expenseTransaction }) => {
    const { deleteExpenseTransaction, sign } = useContext(GlobalContext);
    const expenseTimeStamp = moment().format('LLL');

    return (
    <li className='pl-4 text-red-500 text-sm font-serif space-x-1'>
        <span>{expenseTimeStamp}</span>
        <span>{expenseTransaction.expenseText}</span>
        <span>{expenseTransaction.expenseCategory}</span>
        <span>{sign} {Math.abs(expenseTransaction.expenseAmount).toFixed(2)} </span>
        <button className='text-xs text-black bg-gray-200'
        onClick={() => deleteExpenseTransaction(expenseTransaction.expenseId)}>delete
        </button>
    </li>
    )
}

export default ExpenseTransaction;