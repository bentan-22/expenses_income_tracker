import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import moment from 'moment';

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteIncomeTransaction, sign } = useContext(GlobalContext);
  const incomeTimeStamp = moment().format('LLL');

  const handleDelete = () => {
    deleteIncomeTransaction(incomeTransaction.incomeId);
  };

  return (
    <li>
      <span>{incomeTimeStamp}</span>
      <span>{incomeTransaction.incomeText}</span>
      <span>{incomeTransaction.incomeCategory}</span>
      <span>
        {sign} {Math.abs(incomeTransaction.incomeAmount).toFixed(2)}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default IncomeTransaction;