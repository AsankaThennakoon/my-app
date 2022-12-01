import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
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



  return (

      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onAddFilter={onAddFilterHandler}></ExpensesFilter>
     
        <ExpenseChart items={filteredExpense}></ExpenseChart>
        <ExpensesList items={filteredExpense}></ExpensesList>
   
  </Card>

  );
}

export default Expenses;
