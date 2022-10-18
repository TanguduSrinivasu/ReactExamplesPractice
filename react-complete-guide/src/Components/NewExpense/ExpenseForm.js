import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')  //data will be string even though we enter the number
    const [enteredDate, setEnteredDate] = useState('')    //data will be string even though we enter the date

    function titleChangeHandler(event)
    {
        setEnteredTitle(event.target.value)
    }

    function amountChangeHandler(event)
    {
        setEnteredAmount(event.target.value)
    }

    function dateChangeHandler(event)
    {
        setEnteredDate(event.target.value)
    }

    function submitHandler(event)
    {
        event.preventDefault()  //By using this after form data submission, data will be displayed in Console and it will be stored if not data won't be there
        const expenseData = 
        {
                title : enteredTitle,
                amount : +enteredAmount,
                date : new Date(enteredDate)
        } 
        //console.log(expenseData)   /* here we stored change in object and called the object or you can direcly the changed value as below*/
       /*  console.log(enteredTitle)
        console.log(enteredAmount)
        console.log(enteredDate) */
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
    <form onSubmit={submitHandler}>
       <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text"  value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number"  value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>  {/* step attribute is used for gap intervals*/}
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date"  value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
        </div> 
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button action="submit">Add Expense</button>
        </div>

    </form>
  )
}

export default ExpenseForm