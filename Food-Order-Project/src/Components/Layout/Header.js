import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../Assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h2>Food Order App</h2>
            <HeaderCartButton onCartShow={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes.mainImage}>
            <img src={mealsImage} alt="A Table full of Meals to Eat"></img>
        </div>
    </React.Fragment>
  )
}

export default Header