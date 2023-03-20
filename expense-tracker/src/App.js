
import './App.css';
import Expenses from './components/Expense/expenses';

import React from 'react'
function App() {
  let expense=[{
    id:'e1',
    title:'Health Insurance',
    price:100,
    date:new Date(2023,3,19)

  },
  {
    id:'e3',
    title:'Home Insurance',
    price:200,
    date:new Date(2023,3,19)

  },
  {
    id:'e3',
    title:'Insurance',
    price:500,
    date:new Date(2023,3,19)

  }
]
  return (
    <div>
      <h2>Let's Started</h2>
       <Expenses items={expense}/>
    </div>
   
  );
}

export default App;
