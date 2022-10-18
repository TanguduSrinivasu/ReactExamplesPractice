import React, { useState } from 'react'
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Store/CartProvider';


function App() {

    const [cartIsShown,setCartIsShown] = useState(false)  

    const showCartHandler = () => {
      setCartIsShown(true);
    }

    const HideCartHandler = () => {
      setCartIsShown(false)
    }


  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={HideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
      <Meals></Meals>
      </main>
    </CartProvider>
  )
}

export default App;
