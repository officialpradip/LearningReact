import './expensesItems.css'

function ExpensesItems(props){
    const year=props.date.getFullYear();
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});;

    return(
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item-desc">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.price}</div>
            </div>
        </div>
    )
}
export default ExpensesItems;