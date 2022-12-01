
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList=props=>{

    if(props.items.length===0){
        return <p className="expenses-list__fallback">Found No Items</p>
    }


    return <ul className="expenses-list ">{
        props.items.map(expensesItem=><ExpenseItem
            key={expensesItem.id}
              title={expensesItem.title}
              amount={expensesItem.amount}
              date={expensesItem.date}
            />)
        
        }
    

    </ul>
}

export default ExpensesList;