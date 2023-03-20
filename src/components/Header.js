import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Personal Financial Planner</h1>
      <nav>
        <ul>
          <li><Link to="/">Overview</Link></li>
          <li>
            <ul>
              <li><Link to="/expenses">Expenses</Link></li>
              <li><Link to="/income">Income</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;