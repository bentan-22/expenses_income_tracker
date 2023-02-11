import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const IncomeBalance = () => {
  const { incomeTransactions, sign } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(incomeTransaction => incomeTransaction.incomeAmount);
  const incomeTotal = incomeAmounts.reduce(
    (acc, item) => (acc += item), 
    0).toFixed(2);
  
  return (
    <>
    <h1 className='text-3xl font-serif text-green-600'>
      {sign} {incomeTotal}
    </h1>
    </>
  )
}

export default IncomeBalance;