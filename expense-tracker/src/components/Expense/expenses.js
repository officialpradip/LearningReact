
import '../Expense/expenses.css'
// import Card from './UI/card';
import Card from '../UI/card'
import ExpensesItems from './expensesItems';
import React from 'react';
const Expenses=(props)=>{
    return(
        <Card className="expenses">
       <ExpensesItems date={props.items[0].date} title={props.items[0].title} price={props.items[0].price}/>
       <ExpensesItems date={props.items[1].date} title={props.items[1].title} price={props.items[1].price}/>
       <ExpensesItems date={props.items[2].date} title={props.items[2].title} price={props.items[2].price}/>
        </Card>

    )
}
export default Expenses;