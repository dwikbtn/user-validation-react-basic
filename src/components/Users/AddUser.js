import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
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
  return (
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
  );
};

export default AddUser;
