import React, { useState } from "react";
import Cards from "../UI/Cards";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    //console.log('In Expense.js')
    //console.log('selectedYear' + selectedYear);
    //console.log('filteredYear' +filteredYear);
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(
   expense =>  expense.date.getFullYear().toString() === filteredYear   
  );

  console.log(filteredExpenses.length)



  return (
    <div>
      <Cards className="expenses">
        <ExpenseFilter
          selected={filteredYear}         /* By default that is intially we are taking 2020 as passing it to child ExpenseFilter */
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
      {/*<ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}          {/*  dynamically rendering data from App.js expenses Array which consiste of objects */}

        {/* {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
         ))} */}                     {/*  Displaying full data without filters */}
     {/*    {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>                 
        ))}  */}                              {/* Displaying full data with date filters */}

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Cards>
    </div>
  );
}

export default Expenses;
