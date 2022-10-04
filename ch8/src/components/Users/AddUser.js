import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandeler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value)
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      // parse to Int
      setError({
        title: "invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

   
  };



  const errorHandeler = () => {
    setError(null);
  }; 

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandeler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandeler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
           
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
