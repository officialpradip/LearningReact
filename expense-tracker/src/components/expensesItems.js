import './expensesItems.css'
import ExpenseDate from './expensedate';
import Card from './card';
import React from 'react';
function ExpensesItems(props){
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-desc">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.price}</div>
            </div>
        </Card>
    )
}
export default ExpensesItems;