import ExpenseDate from './expensedate';
import './expensesItems.css'
import Card from '../UI/card';
import React,{ useState } from 'react';


const ExpensesItems=(props)=>{
    // const [newTitle,setNewTitle]=useState(" ");
    // const [title,setTitle]=useState(props.title);

    // let demoClick=()=>{
    //     setTitle(newTitle);

    // }
    // const NewTitle=(event)=>{
    //     setNewTitle(event.target.value);
    // }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-desc">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.price}</div>
            </div>
            {/* <input type="text" value={newTitle} onChange={NewTitle}></input>
            <button onClick={demoClick}>Change Title</button> */}
        </Card>
    )
}
export default ExpensesItems;