import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

function BackDrop(props) {
  return <div className={classes.backdrop} onClick={props.onError}></div>;  //dark shadow like structure
}

function OverLay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onError}>Okay</Button>            {/* popup or overlap structure */}
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop onError={props.onError}></BackDrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <OverLay title={props.title} message={props.message} onError={props.onError}></OverLay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
