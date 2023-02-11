import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import IncomeTransaction from './incomeTransaction';

const IncomeTransactionList = () => {
  const { incomeTransactions } = useContext(GlobalContext);
  
  return (
    <>
      <h3 className='p-2 text-2xl'>Income Transactions History</h3>
      <ul className='list-disc list-inside'>
        {incomeTransactions.map(incomeTransaction => (<IncomeTransaction 
        key={incomeTransaction.incomeId} /* The key uses the uuid generated for each incomeId in IncomeTransaction */
        incomeTransaction={incomeTransaction}/>))}
      </ul>
    </>
  )
}

export default IncomeTransactionList;