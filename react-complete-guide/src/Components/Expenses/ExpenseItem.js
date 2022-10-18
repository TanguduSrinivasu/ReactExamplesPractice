import React, { useState } from "react";
import Cards from "../UI/Cards"
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

function ExpenseItem(props) {

    /* const expenseDate = new Date(2021, 3, 28);
    const expenseTitle = 'Car Insurance'
    const expensePrice = 249.67 */
    /* const [title, setTitle] = useState(props.title)

    const clickHandler = () => {

      setTitle('Updated Value')
      console.log(title)
    } */

  return (
    <ol>
    <Cards className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>   {/*Recieved data from Apps and passing to Expense Component */}
      <div className="expense-item__description" >
        {/* <h2>{title}</h2>   */}
        <h2>{props.title}</h2>                       {/* Recieved data from Apps component through props obj */}  
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click Here</button> */}
    </Cards>
    </ol>
  );
}

export default ExpenseItem;


