
import './App.css';
import ExpensesItems from './components/expensesItems';
function App() {
  let expenseDate= new Date(2023,3,19);
  let expenseTitle="Insurance";
  let expensePrice=300;
  return (
    <div>
      <h2>Let's Started</h2>
       <ExpensesItems date={expenseDate} title={expenseTitle} price={expensePrice}></ExpensesItems>
    </div>
   
  );
}

export default App;
