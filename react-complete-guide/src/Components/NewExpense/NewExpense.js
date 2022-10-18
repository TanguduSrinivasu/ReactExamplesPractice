import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

  const [isEditing , setIsEditing] = useState(false);

  function SaveExpenseDataHandler(enteredExpenseData)
  {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
   // console.log(expenseData)
   props.onAddExpense(expenseData)
   setIsEditing(false)
  }

  function startEditingHandler() {
    setIsEditing(true)
  }

  function stopEditingHandler() {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add NewExpense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  )
}

export default NewExpense