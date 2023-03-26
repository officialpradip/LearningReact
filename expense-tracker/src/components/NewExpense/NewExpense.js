import './NewExpense.css';
import React from 'react';
import ExpenseForm from './ExpenseForm';
let NewExpense=(props)=>{
    const saveExpenseData=(title)=>{
        const expenseData={
            ...title,
            id: Math.random().toString()
        }
        props.assExpenseHandlerProps(expenseData)
        console.log(expenseData)
    };
    return(
        <div className='new-expense'>
            <ExpenseForm saveExpenseDataProps={saveExpenseData} />

        </div>
    )
}
export default NewExpense;