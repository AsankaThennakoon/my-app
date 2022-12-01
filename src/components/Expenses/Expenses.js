import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses(props) {
  // const [filteredExpense,setFilteredExpense]=useState(props.expenses);
  const [filteredYear,setFilteredYear]=useState(
    '2020'
  )

  const onAddFilterHandler=(filterValue)=>{
    setFilteredYear(filterValue);
    console.log(filterValue);

     
    console.log(filteredExpense);
  }

  
const filteredExpense= props.expenses.filter(expense=>expense.date.getFullYear().toString()===filteredYear); 


let expenseContent=<p>No Content!</p>
if(filteredExpense.length>0){
  expenseContent=filteredExpense.map(expensesItem=><ExpenseItem
    key={expensesItem.id}
      title={expensesItem.title}
      amount={expensesItem.amount}
      date={expensesItem.date}
    />);
}
  return (

      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onAddFilter={onAddFilterHandler}></ExpensesFilter>
        {/* {
          filteredExpense.length===0?<p>There is no content</p>: filteredExpense.map(expensesItem=><ExpenseItem
            key={expensesItem.id}
              title={expensesItem.title}
              amount={expensesItem.amount}
              date={expensesItem.date}
            />)
        } */}
        {
          // filteredExpense.length===0 && <p>NO content</p>
        }
        {
          // filteredExpense.length>0 && filteredExpense.map(expensesItem=><ExpenseItem
          //   key={expensesItem.id}
          //     title={expensesItem.title}
          //     amount={expensesItem.amount}
          //     date={expensesItem.date}
          //   />)
        }
        {
          expenseContent
        }
   
  </Card>

    
    
  );
}

export default Expenses;
