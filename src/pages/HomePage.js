import React from 'react';
import ExpenseBalance from '../components/Expenses/ExpenseBalance';
import IncomeBalance from '../components/Income/IncomeBalance';
import API from '../components/API';

function HomePage() {
  return (
    <section>
      <h2>Total Expenses:</h2>
      <ExpenseBalance />
      <h2>Total Income:</h2>
      <IncomeBalance />
      <API />
    </section>
  );
}

export default HomePage;