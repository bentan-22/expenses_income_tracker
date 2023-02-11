import React from 'react';
import ExpenseBalance from '../components/Expenses/ExpenseBalance';
import IncomeBalance from '../components/Income/IncomeBalance';
import API from '../components/API';

const HomePage = () => {
  return (
  <>
    <div className='flex flex-col'>
      <div className='pb-8 flex flex-row space-x-4'>
        <h1 className='flex flex-row font-sans text-3xl text-red-700'>Total Expenses:</h1>
        <ExpenseBalance />
      </div>
      <div className='pb-8 flex flex-row space-x-4'>
        <h1 className='flex flex-row font-sans text-3xl text-green-700'>Total Income: </h1>
        <IncomeBalance />
      </div>
      <API />
    </div>
  </>
)}

export default HomePage;