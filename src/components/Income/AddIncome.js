import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const AddIncome = () => {
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeCategory, setIncomeCategory] = useState('cash');
  const [incomeText, setIncomeText] = useState('');

  const { addIncomeTransaction } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newIncomeTransaction = {
      incomeId: uuidv4(),
      incomeAmount: parseInt(incomeAmount),
      incomeCategory,
      incomeText,
    };

    addIncomeTransaction(newIncomeTransaction);
    setIncomeAmount(0);
    setIncomeCategory('cash');
    setIncomeText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='amount'>Amount<br /></label>
          <input
            type='number'
            value={incomeAmount}
            onChange={(event) => setIncomeAmount(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor='income-category'>Category<br /></label>
          <select
            value={incomeCategory}
            onChange={(event) => setIncomeCategory(event.target.value)}
          >
            <option value='cash'>Cash</option>
            <option value='interest'>Interest</option>
            <option value='investment'>Investment</option>
            <option value='other-income'>Others</option>
            <option value='rent'>Rent</option>
            <option value='salary'>Salary</option>
            <option value='transfer'>Transfer</option>
          </select>
        </div>

        <div>
          <label htmlFor='text'>Remarks<br /></label>
          <input
            type='text'
            value={incomeText}
            onChange={(event) => setIncomeText(event.target.value)}
          />
        </div>

        <div>
          <button>Add Income Transaction</button>
        </div>
      </form>
    </>
  );
};

export default AddIncome;