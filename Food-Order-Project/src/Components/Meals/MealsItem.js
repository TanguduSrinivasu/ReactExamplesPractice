import React, { useContext } from "react";
import cartContext from "../../Store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from './MealsItem.module.css'

function MealsItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(cartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
        id : props.id,
        name : props.name,
        price : props.price,
        amount : amount
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
}

export default MealsItem;
