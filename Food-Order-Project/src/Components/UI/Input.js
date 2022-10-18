import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={ref} label={props.label} id={props.id} type={props.type} min={props.min} max={props.max} defaultValue={props.defaultValue}></input>
    </div>
  )

//    {/* <label htmlFor={props.input.id}>{props.label}</label>
//         <input {...props.input}></input> */} {/* no need to give each and every property(attribute) we called all the properties from object as prop using spread operator */}
})

export default Input