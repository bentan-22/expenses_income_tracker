import React from 'react';
import ExpenseBalance from '../components/Expenses/ExpenseBalance';
import ExpenseTransactionList from '../components/Expenses/ExpenseTransactionList';
import AddExpense from '../components/Expenses/AddExpense';
import API from '../components/API';

const ExpensesPage = () => {
  return (
    <div className='pl-20'>
      <span className='font-serif flex flex-row space-x-5'>
        <h4 className='text-3xl text-red-600'>Total Expenses</h4>
        <ExpenseBalance />
      </span>
      <ExpenseTransactionList />
      <AddExpense />
      <API />
    </div>
  )
}

export default ExpensesPage;