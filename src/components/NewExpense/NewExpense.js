import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

  const newExpense=(receivedNewExpens)=>{
    const newExpenseTem={
      ...receivedNewExpens,
      id:Math.random().toString()
    }
    console.log(newExpenseTem);
    props.onAddNewExpense(newExpenseTem);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveNewExpense={newExpense}/>
    </div>
  );
};

export default NewExpense;
