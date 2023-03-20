import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import moment from 'moment';

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteExpenseTransaction, sign } = useContext(GlobalContext);
  const expenseTimeStamp = moment().format('LLL');

  const handleDeleteClick = () => {
    deleteExpenseTransaction(expenseTransaction.expenseId);
  };

  return (
    <li>
      <span>{expenseTimeStamp}</span>
      <span>{expenseTransaction.expenseText}</span>
      <span>{expenseTransaction.expenseCategory}</span>
      <span>
        {sign} {Math.abs(expenseTransaction.expenseAmount).toFixed(2)}
      </span>
      <button onClick={handleDeleteClick}>delete</button>
    </li>
  );
};

export default ExpenseTransaction;