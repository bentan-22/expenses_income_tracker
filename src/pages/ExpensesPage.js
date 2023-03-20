import React from 'react';
import ExpenseBalance from '../components/Expenses/ExpenseBalance';
import ExpenseTransactionList from '../components/Expenses/ExpenseTransactionList';
import AddExpense from '../components/Expenses/AddExpense';
import API from '../components/API';

function ExpensesPage() {
  return (
    <section>
      <header>
        <h2>Total Expenses</h2>
        <ExpenseBalance />
      </header>
      <ExpenseTransactionList />
      <AddExpense />
      <API />
    </section>
  );
}

export default ExpensesPage;