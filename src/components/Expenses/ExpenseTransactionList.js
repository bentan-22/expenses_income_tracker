import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';

const ExpenseTransactionList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Expense Transactions History</h3>
      <ul>
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.expenseId}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTransactionList;