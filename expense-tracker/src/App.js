
import './App.css';
import ExpensesItems from './components/expensesItems';
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
       <ExpensesItems date={expense[0].date} title={expense[0].title} price={expense[0].price}></ExpensesItems>
       <ExpensesItems date={expense[1].date} title={expense[1].title} price={expense[1].price}></ExpensesItems>
       <ExpensesItems date={expense[2].date} title={expense[2].title} price={expense[2].price}></ExpensesItems>
    </div>
   
  );
}

export default App;
