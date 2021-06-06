import React from "react";

const UserList = () => {
  return (
    <ul>
      {props.users.map((user, i) => {
        <li id={i}>
          {user.name} ({user.age} Years old)
        </li>;
      })}
    </ul>
  );
};

export default UserList;
