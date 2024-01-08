import UserList from "./components/List/UserList";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form/Form";

function App() {
  const [users, setUsers] = useState([
    {
      name: "mehmet",
      email: "mehmet65gmail.com",
      age: 59,
    },
    {
      name: "ali",
      email: "alijg@gmail.com",
      age: 35,
    },
  ]);

  const addUser = (user) => {
    setUsers(users.concat(user));
  };
  return (
    <div className="container">
      <Form addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
