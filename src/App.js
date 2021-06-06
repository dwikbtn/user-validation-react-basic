import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App(props) {
  const [userList, setUserlist] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUserlist((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
