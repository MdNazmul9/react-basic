import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.96,
      date: new Date(2022, 9, 15),
    },
    { id: "e2", title: "Pen", amount: 30.4, date: new Date(2022, 9, 11) },
    { id: "e3", title: "Mouse", amount: 450.87, date: new Date(2022, 7, 10) },
    { id: "e4", title: "Laptop", amount: 7200.95, date: new Date(2022, 5, 20) },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "Ehsan's Marketing!"),
  //   React.createElement(Expenses, {items: expenses}, ),
  // );

  const addExpenseHandeler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandeler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
