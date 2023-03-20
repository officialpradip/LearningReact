import ExpenseDate from './expensedate';
import './expensesItems.css'
import Card from '../UI/card';
import React from 'react';
const ExpensesItems=(props)=>{
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