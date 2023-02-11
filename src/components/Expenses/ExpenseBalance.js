import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const ExpenseBalance = () => {
  const { expenseTransactions, sign } = useContext(GlobalContext);

  const expenseAmounts = expenseTransactions.map(expenseTransaction => expenseTransaction.expenseAmount);
  const expenseTotal = expenseAmounts.reduce(
    (acc, currentValue) => (acc += currentValue), 
    0).toFixed(2);

  return (
    <>
    <h1 className='text-3xl font-serif text-red-600'>
      {sign} {expenseTotal}
    </h1>
    </>
  )
}

export default ExpenseBalance;