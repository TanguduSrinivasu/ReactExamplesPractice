import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";



const Dummy_Expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expenses,setExpenses] = useState(Dummy_Expense)

  function addExpenseHandler(expense) {
    /* console.log("In App.js");
    console.log(expense); */              /* Rendering newly added expense data from Newexpense.js -> expenseForm.js in App.js */
    /* setExpenses([expense, ...expenses])  */    /* But better to use function which depends on the previous state */
    setExpenses(previousExpenses => {
     return [expense, ...previousExpenses]
    })                                       /* here previousExpenses = expenses */
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
