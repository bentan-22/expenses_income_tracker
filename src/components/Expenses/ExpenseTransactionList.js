import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseTransactionList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  
  return (
    <>
      <h3 className='p-2 text-2xl'>Expense Transactions History</h3>
      <ul className='list-disc list-inside'>
        {expenseTransactions.map(expenseTransaction => (<ExpenseTransaction 
        key={expenseTransaction.expenseId} /* The key uses the uuid generated for each expenseId in ExpenseTransaction */
        expenseTransaction={expenseTransaction}/>))}
      </ul>
    </>
  )
}

export default ExpenseTransactionList;