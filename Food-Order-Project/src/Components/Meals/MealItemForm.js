import React,{useRef, useState} from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css'

function MealItemForm(props) {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        //now we want the total amount from the Input Component which is the custom component so here we use ForwardRef instead of ref for the totalamount state
        const enteredAmount = amountInputRef.current.value; //It is a string
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5)
        {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
       {/* <Input label="Amount" input={{
        id : 'amount',
        type : 'number',
        min : '1',
        max :'5',
        step : '1',
        defaultValue : '1'
    }}></Input> */}       {/*  sending all the attributes through object to Input Component */}
        <Input label='Amount' id={'amount_'  + props.id}  type='number' min='1' max='5' defaultValue='1' ref={amountInputRef}></Input>
       <button>+ Add</button>
       {!amountIsValid && <p>Enter the valid Amount</p>}
    </form>
    
  )
}

export default MealItemForm