import './ExpenseForm.css';
import React,{useState} from 'react';
const ExpenseForm=()=>{
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
    const titleHandler=(event)=>{
        setTitle(event.target.value)
    }
    const amountHandler=(event)=>{
        setAmount(event.target.value)
    }
    const dateHandler=(event)=>{
        setDate(event.target.value)
    }
    return(
        <form>
            <div className='new-expense-controls'>
                <div className='new-expense-control'>
                    <label>Title</label>
                    <input type="text" onChange={titleHandler}></input>
                </div>

                <div className='new-expense-control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountHandler}></input>
                </div>

                <div className='new-expense-control'>
                    <label>Date</label>
                    <input type="date" onChange={dateHandler}></input>
                </div>

            </div>
            <div className='.new-expense-action'>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    )
}
export default ExpenseForm;