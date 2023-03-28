
import './App.css';
import Expenses from './components/Expense/expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React,{useState} from 'react'
let dummyexpense=[{
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
const App=()=> {
  const [expenses,setExpense]=useState(dummyexpense)
  const assExpenseHandler = (expense)=>{
    const updatedExpense=[expense,...expenses]
    setExpense(updatedExpense)
  }
  return (
    <div>
      <h2>Let's Started</h2>
      <NewExpense assExpenseHandlerProps={assExpenseHandler}/>
       <Expenses items={expenses}/>
    </div>
   
  );
}

export default App;
