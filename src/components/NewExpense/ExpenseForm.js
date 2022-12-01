import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [changeTitle, setTitle] = useState("");
  const [changeAmount, setAmount] = useState("");
  const [changeDate, setDate] = useState("");

  

  
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
   
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
   
  };
  const onSubmitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title:changeTitle,
      amount:changeAmount,
      date:new Date(changeDate),
    }
    console.log(expenseData+"this is child");

    setTitle('');
    setAmount("");
    setDate("");

    props.onSaveNewExpense(expenseData);
  
  }


  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={changeTitle} onChange={titleChangeHandler} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={changeAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={changeDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;