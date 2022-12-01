import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing,setIsEditing]=useState(false);


  const newExpense=(receivedNewExpens)=>{
    const newExpenseTem={
      ...receivedNewExpens,
      id:Math.random().toString()
    }
    console.log(newExpenseTem);
    props.onAddNewExpense(newExpenseTem);

    setIsEditing(false);
  }

  const addNewExpensHandler=()=>{
    setIsEditing(true);
  }

  const cancelEditing=()=>{
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing&&<button onClick={addNewExpensHandler}>Add New Expense</button>}
      {isEditing&&<ExpenseForm onSaveNewExpense={newExpense} onCancel={
        cancelEditing
      }/>}
    </div>
  );
};

export default NewExpense;
