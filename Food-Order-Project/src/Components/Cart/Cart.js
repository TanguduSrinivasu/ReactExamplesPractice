import React, { useContext } from "react";
import cartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const CartCtx = useContext(cartContext);
  const totalAmount = CartCtx.totalAmount.toFixed(2);
  console.log(totalAmount);
  const hasItems = CartCtx.items.length > 0;

  // const cartItems = CartCtx.items.map(item => <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount}></CartItem>)
  const cartAddItemHandler = (item) => {
    CartCtx.addItem(item)
  };

  const cartRemoveItemHandler = (id) => {
    CartCtx.removeItem(id)
  };

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {CartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartAddItemHandler.bind(null, item)}
            onRemove={cartRemoveItemHandler.bind(null, item.id)}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
