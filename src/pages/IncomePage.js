import React from 'react';
import IncomeBalance from '../components/Income/IncomeBalance';
import IncomeTransactionList from '../components/Income/IncomeTransactionsList';
import AddIncome from '../components/Income/AddIncome';
import API from '../components/API';

const IncomePage = () => {
  return (
    <div>
      <span className='font-serif flex flex-row space-x-5'>
        <h4 className='text-3xl text-green-600'>Total Income</h4>
        <IncomeBalance />
      </span>
      <IncomeTransactionList />
      <AddIncome />
      <API />
    </div>
  )
}

export default IncomePage;