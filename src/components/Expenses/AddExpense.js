import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
// uuidv4 is to generate a unique id for each new expense transaction

const AddExpense = () => {
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [expenseCategory, setExpenseCategory] = useState('cash');
    const [expenseText, setExpenseText] = useState('');

    const { addExpenseTransaction } = useContext(GlobalContext);

    const onSubmit = event => {
      event.preventDefault();

      const newExpense = {
        expenseId: uuidv4(),
        expenseAmount: parseInt(expenseAmount),
        expenseCategory: expenseCategory,
        expenseText: expenseText
      }

      addExpenseTransaction(newExpense);
    }

  return (
    <>
      <form onSubmit={onSubmit}>
      
      <div className='p-2 flex flex-row space-x-5'>
            <label className='text-lg' htmlFor='amount'>
                Amount<br />
            </label>
            <input type='number'
                className='bg-gray-200 text-center'
                value={expenseAmount}
                onChange={(event) => setExpenseAmount(event.target.value)}>
            </input>
        </div>

        <div className='p-2 flex flex-row space-x-5'>
            <label className='text-lg' htmlFor='expense-category'>Category <br /></label>
            <select value={expenseCategory}
              className='bg-gray-200 text-center'
              onChange={(event) => {
              setExpenseCategory(event.target.value)
            }}>
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

        <div className='p-2 flex flex-row space-x-5'>
            <label className='text-lg' htmlFor='text'>
              Remarks<br />
            </label>
            <input type='text'
                className='bg-gray-200'
                value={expenseText}
                onChange={(event) => setExpenseText(event.target.value)}>
            </input>
        </div>

        <div className='p-2 flex flex-row space-x-5'>
          <button className='bg-red-200 font-serif'>Add expense transaction</button>
        </div>
        </form>
    </>
  )
}

export default AddExpense;