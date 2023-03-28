
import '../Expense/expenses.css'
// import Card from './UI/card';
import Card from '../UI/card'
import ExpensesItems from './expensesItems';
import React from 'react';
const Expenses=(props)=>{
    return(
        <Card className="expenses">
            {
                props.items.map(
                    e => (
                    <ExpensesItems date={e.date} title={e.title} price={e.price}/>

                ))
            }
       
       
        </Card>

    )
}
export default Expenses;