import React, { useState }from "react";
import ExpenseForm from "./expenseForm";
import "./newExpense.css";

const NewExpense = (props) => {
  const [isEditing , setIsEditing]=useState(false);
  const saveExpenseHandler=(enterExpenseData)=>{
const expenseData ={
  ...enterExpenseData,
  id:Math.random().toString()
}
props.onAddExpense(expenseData)
setIsEditing(false)
  }

const startEditingHandler=()=>{
  setIsEditing(true)
}
const stopEditingHandler=()=>{
  setIsEditing(false)
}

  return (
    <div className="new-expense">
     { !isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
