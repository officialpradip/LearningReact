import './expensesItems.css'
import ExpenseDate from './expensedate';
function ExpensesItems(props){
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-desc">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.price}</div>
            </div>
        </div>
    )
}
export default ExpensesItems;