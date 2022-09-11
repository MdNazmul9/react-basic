import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",title: "Car Insurance", amount: 294.96, date: new Date(2022, 9, 10),
    },
    { id: "e2", title: "Pen", amount: 30.4, date: new Date(2022, 9, 10) },
    { id: "e3", title: "Mouse", amount: 450.87, date: new Date(2022, 9, 10) },
    { id: "e4", title: "Laptop", amount: 7200.95, date: new Date(2022, 9, 10) },
  ];

  return (
    <div className="App">
      <h1> Ehsan Marketing!</h1>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
