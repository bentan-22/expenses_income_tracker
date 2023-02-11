import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import IncomePage from './pages/IncomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  // const imgUrl = 'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbmFsJTIwZmluYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60';
  // const divStyle = {
    // backgroundImage: 'url(' + imgUrl + ')',
  // }
  return (
    <div className='pt-2 pb-20 bg-cover bg-center text-gray-700' /* style={divStyle} */>
      <div className='backdrop-blur-sm'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/income" element={<IncomePage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
