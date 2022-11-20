import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Change the title");
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>{title}</div>
      <div className='expense-item__price'>${props.amount}</div>
      <button onClick={clickHandler}>Click Here</button>
    </Card>
  );
}

export default ExpenseItem;
