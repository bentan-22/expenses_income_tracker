import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const IncomeBalance = () => {
  const { incomeTransactions, sign } = useContext(GlobalContext);

  const incomeTotal = incomeTransactions.reduce(
    (acc, { incomeAmount }) => acc + incomeAmount,
    0
  ).toFixed(2);

  return (
    <h1>
      {sign} {incomeTotal}
    </h1>
  );
};

export default IncomeBalance;