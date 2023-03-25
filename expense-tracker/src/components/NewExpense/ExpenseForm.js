import './ExpenseForm.css';
import React from 'react';
const ExpenseForm=()=>{
    return(
        <form>
            <div className='.new-expense-controls'>
                <div className='.new-expense-control'>
                    <label>Title</label>
                    <input type="text"></input>
                </div>

                <div className='.new-expense-control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"></input>
                </div>

                <div className='.new-expense-control'>
                    <label>Date</label>
                    <input type="date"></input>
                </div>

            </div>
            <div className='.new-expense-action'>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    )
}
export default ExpenseForm;