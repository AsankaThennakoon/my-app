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

  
const filteredExpense= props.expenses.filter(expense=>expense.date.getFullYear()==filteredYear); 

  return (

   

      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onAddFilter={onAddFilterHandler}></ExpensesFilter>
    {
    
     filteredExpense.map(expensesItem=><ExpenseItem
        key={expensesItem.id}
          title={expensesItem.title}
          amount={expensesItem.amount}
          date={expensesItem.date}
        />)
    
    }
  </Card>

    
    
  );
}

export default Expenses;
