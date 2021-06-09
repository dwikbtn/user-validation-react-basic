import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return setError({
        title: "Invalid Input",
        message: "Form must not be empty",
      });
    }
    if (+enteredUserAge < 1) {
      return setError({
        title: "Invalid Age",
        message: "Form must not less then 1",
      });
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const onUsernameChange = (e) => {
    setEnteredUserName(e.target.value);
  };
  const onAgeChange = (e) => {
    setEnteredUserAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={onUsernameChange}
          />
          <label htmlFor="">Age</label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            onChange={onAgeChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
