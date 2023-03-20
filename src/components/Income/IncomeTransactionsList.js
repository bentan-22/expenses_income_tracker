import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';

const IncomeTransactionList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Income Transactions History</h3>
      <ul>
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.incomeId}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default IncomeTransactionList;