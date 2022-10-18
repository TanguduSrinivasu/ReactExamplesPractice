import React from 'react';
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css'


function BackDrop(props){
    return(
        <div className={classes.backdrop} onClick={props.onHide}> </div>
    )
}

function OverLay(props){
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

    const overlayModel = document.getElementById("overLay")

function Modal(props) {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onHide={props.onClose}></BackDrop>, overlayModel)}
        {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>, overlayModel)}
    </React.Fragment>
  )
}

export default Modal