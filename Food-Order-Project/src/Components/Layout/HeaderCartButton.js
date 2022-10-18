import React, { useContext, useEffect, useState } from 'react'
import cartContext from '../../Store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {

  const [buttonIsHighlighted, setButtonIsHighlighted] =useState(false)

    const cartCtxt = useContext(cartContext);
    const numberOfCartItems = cartCtxt.items.reduce((curNumber, item) => {
      return curNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${buttonIsHighlighted &&  classes.bump}`;

    useEffect(() => {
      if(cartCtxt.items.length === 0)
      {
        return;
      }
      setButtonIsHighlighted(true)

      const timer = setTimeout(() => {
        setButtonIsHighlighted(false)
      }, 300)

      return(() => {
        clearTimeout(timer)
      })

    }, [cartCtxt.items])

  return (
    <button className={btnClasses} onClick={props.onCartShow}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton