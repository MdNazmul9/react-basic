import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // default js nature
  // document.getElementById('').addEventListener('click', (event)=>{})

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandeler = (event) => {
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, // make sure other data is no change
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle: event.target.value}
    // });
  };

  const amountChangeHandeler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput, // make sure other data is no change
    //   enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandeler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, // make sure other data is no change
    //   enteredDate: event.target.value,
    // })
  };

  const submitHandeler = (event) => {
    event.preventDefault();

    const expensedata = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
   
    }

    // console.log(expensedata);
    props.onSaveExpenseData(expensedata);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandeler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandeler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1990-01-01"
            max="2030-01-01"
            value={enteredDate}
            onChange={dateChangeHandeler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
