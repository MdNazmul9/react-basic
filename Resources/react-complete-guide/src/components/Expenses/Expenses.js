import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "../UI/Card.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandeler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>There is no content</p>;
  console.log("filteredExpenses.length: ", filteredExpenses.length);
  // if (filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key = {expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandeler}
      ></ExpensesFilter>


      {filteredExpenses.length === 0? <p className="notFound"> No content found</p>:

   
      filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </Card>
  );
};

export default Expenses;
