import React from 'react';
import IncomeBalance from '../components/Income/IncomeBalance';
import IncomeTransactionList from '../components/Income/IncomeTransactionsList';
import AddIncome from '../components/Income/AddIncome';
import API from '../components/API';

function IncomePage() {
  return (
    <section>
      <header>
        <h2>Total Income</h2>
        <IncomeBalance />
      </header>
      <IncomeTransactionList />
      <AddIncome />
      <API />
    </section>
  );
}

export default IncomePage;