import ExpenseDate from './expensedate';
import './expensesItems.css'
import Card from '../UI/card';
import React,{ useState } from 'react';


const ExpensesItems=(props)=>{
    const [title,setTitle]=useState(props.title);

    let demoClick=()=>{
        setTitle("New Title");

    }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-desc">
                <h2>{title}</h2>
                <div className="expense-item-price">${props.price}</div>
            </div>
            <button onClick={demoClick}>Change Title</button>
        </Card>
    )
}
export default ExpensesItems;