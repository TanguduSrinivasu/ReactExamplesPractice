import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  //const [enteredUsername,setEnteredUsername] = useState('');
  //const [enteredAge,setEnteredAge] = useState('');
  const username = useRef();
  const age = useRef();
  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();

    const enteredUsername = username.current.value;
    const enteredAge = age.current.value;
    console.log(enteredUsername, enteredAge)

    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      setError({
        title: "Inavlid Input",
        message: "Enter the valid Username and Age",
      });
      return;
    }

    if (enteredUsername.trim().length === 0 && +enteredAge < 1) {
      setError({
        title: "Inavlid Input",
        message: "Enter the valid Username and Age(>0)",
      });
      return;
    }

    if (enteredUsername.trim().length === 0) {
      setError({ title: "Inavlid Input", message: "Enter the valid Username" });
      return;
    }

    if (enteredAge.trim().length === 0) {
      setError({ title: "Inavlid Input", message: "Enter the valid Age" });
      return;
    }

    if (+enteredAge < 1) {
      setError({ title: "Inavlid Age", message: "Enter the valid Age( > 0)" });
      return;
    } 


    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
        setError({
          title: "Inavlid Input",
          message: "Enter the valid Username and Age",
        });
        return;
      }
  
      if (enteredUsername.trim().length === 0 && +enteredAge < 1) {
        setError({
          title: "Inavlid Input",
          message: "Enter the valid Username and Age(>0)",
        });
        return;
      }
  
      if (enteredUsername.trim().length === 0) {
        setError({ title: "Inavlid Input", message: "Enter the valid Username" });
        return;
      }
  
      if (enteredAge.trim().length === 0) {
        setError({ title: "Inavlid Input", message: "Enter the valid Age" });
        return;
      }
  
      if (+enteredAge < 1) {
        setError({ title: "Inavlid Age", message: "Enter the valid Age( > 0)" });
        return;
      }

    //console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge); 
    username.current.value = '';
    age.current.value = '';   /* but not preferd this one */
    /* setEnteredUsername("");
    setEnteredAge(""); */
  }

  /* const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; */

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={userNameChangeHandler}
            ref={username}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
         /*    value={enteredAge}
            onChange={ageChangeHandler} */
            ref={age}
          ></input>
          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
