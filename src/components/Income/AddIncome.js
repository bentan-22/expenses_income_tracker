import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
// uuidv4 is to generate a unique id for each new expense transaction

const AddIncome = () => {
    const [incomeAmount, setIncomeAmount] = useState(0);
    const [incomeCategory, setIncomeCategory] = useState('cash');
    const [incomeText, setIncomeText] = useState('');

    const { addIncomeTransaction } = useContext(GlobalContext);

    const onSubmit = event => {
      event.preventDefault();

      const newIncome = {
        incomeId: uuidv4(),
        incomeAmount: parseInt(incomeAmount),
        incomeCategory,
        incomeText
      }

      addIncomeTransaction(newIncome);
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
                value={incomeAmount}
                onChange={(event) => setIncomeAmount(event.target.value)}>
            </input>
        </div>

        <div className='p-2 flex flex-row space-x-5'>
            <label className='text-lg' htmlFor='income-category'>Category <br /></label>
            <select 
              className='bg-gray-200 text-center'
              onChange={(event) => {
              setIncomeCategory(event.target.value)
            }}>
              <option value='cash'>Cash</option>
              <option value='interest'>Interest</option>
              <option value='investment'>Investment</option>
              <option value='other-income'>Others</option>
              <option value='rent'>Rent</option>
              <option value='salary'>Salary</option>
              <option value='transfer'>Transfer</option>
            </select>
        </div>

        <div className='p-2 flex flex-row space-x-5'>
            <label className='text-lg' htmlFor='text'>
              Remarks<br />
            </label>
            <input type='text'
                className='bg-gray-200'
                value={incomeText}
                onChange={(event) => setIncomeText(event.target.value)}>
            </input>
        </div>

        <div className='p-2 flex flex-row space-x-5'>
          <button className='bg-green-200 font-serif'>Add income transaction</button>
        </div>
        </form>
    </>
  )
}

export default AddIncome;