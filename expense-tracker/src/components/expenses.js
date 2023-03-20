import './expenses.css'
import ExpensesItems from './expensesItems';
function Expenses(props){
    return(
        <div className="expenses">
            <ExpensesItems date={props.items[0].date} title={props.items[0].title} price={props.items[0].price}></ExpensesItems>
       <ExpensesItems date={props.items[1].date} title={props.items[1].title} price={props.items[1].price}></ExpensesItems>
       <ExpensesItems date={props.items[2].date} title={props.items[2].title} price={props.items[2].price}></ExpensesItems>
        </div>

    )
}
export default Expenses;