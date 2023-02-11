import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h1 className='pt-6 pb-6 text-6xl text-center font-sans'>Personal Financial Planner</h1>
      <nav className='pb-6'>
        <div className='pt-1 pb-2 flex flex-col items-center text-4xl'>
          <Link to="/"><h3 className='bg-gray-300 text-gray-700'>Overview</h3></Link>
          <div className='p-2 flex items-center flex-row space-x-20'>
            <Link to="/expenses"><h3 className='bg-red-300 text-red-700'>Expenses</h3></Link>
            <Link to="/income"><h3 className='bg-green-300 text-green-700'>Income</h3></Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;