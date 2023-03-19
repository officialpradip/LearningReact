import './expensesItems.css'

function ExpensesItems(){
    let title="Car Insurance"
    return(
        <div className="expense-item">
            <div>March 12th 2023</div>
            <div className="expense-item-desc">
                <h2>{title}</h2>
                <div className="expense-item-price">$200</div>
            </div>
        </div>
    )
}
export default ExpensesItems;