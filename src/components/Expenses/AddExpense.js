import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    expenseAmount: 0,
    expenseCategory: 'cash',
    expenseText: ''
  });

  const { addExpenseTransaction } = useContext(GlobalContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      expenseId: uuidv4(),
      ...expense,
      expenseAmount: parseInt(expense.expenseAmount)
    };

    addExpenseTransaction(newExpense);
    setExpense({
      expenseAmount: 0,
      expenseCategory: 'cash',
      expenseText: ''
    });
  };

  const { expenseAmount, expenseCategory, expenseText } = expense;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='amount'>Amount</label>
          <br />
          <input 
            type='number'
            name='expenseAmount'
            value={expenseAmount}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='expense-category'>Category</label>
          <br />
          <select 
            name='expenseCategory' 
            value={expenseCategory}
            onChange={handleChange}
          >
            <option value='cash'>Cash</option>
            <option value='education'>Education</option>
            <option value='electronics'>Electronics</option>
            <option value='entertainment-leisure'>Entertainment / Leisure</option>
            <option value='fashion'>Fashion</option>
            <option value='fees-charges'>Fees & Charges</option>
            <option value='food-and-beverage'>Food & Beverage</option>
            <option value='gifts-donations'>Gifts / Donations</option>
            <option value='groceries'>Groceries</option>
            <option value='health-fitness'>Health & Fitness</option>
            <option value='housing'>Housing</option>
            <option value='insurance'>Insurance</option>
            <option value='investment'>Investment</option>
            <option value='other-expenses'>Others</option>
            <option value='personal-care'>Personal Care</option>
            <option value='phone-internet'>Phone & Internet</option>
            <option value='shopping'>Shopping</option>
            <option value='taxes'>Taxes</option>
            <option value='transport'>Transport</option>
            <option value='transfer'>Transfer</option>
            <option value='travel'>Travel</option>
            <option value='utilities'>Utilities</option>
          </select>
        </div>

        <div>
          <label htmlFor='text'>Remarks</label>
          <br />
          <input 
            type='text'
            value={expenseText}
            onChange={handleChange}
          />
        </div>

        <div>
          <button>Add expense transaction</button>
        </div>
      </form>
    </>
  );
};

export default AddExpense;