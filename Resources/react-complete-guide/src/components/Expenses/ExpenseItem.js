import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title);
  // console.log("Expense item evaluated by react");

  // const clickHandeler = () => {
  //   // console.log("clicked");
  //   setTitle("Updeated!")
  //   console.log(title);
  // }; 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
