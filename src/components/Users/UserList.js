import React from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
