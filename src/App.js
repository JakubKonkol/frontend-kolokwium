import './App.css';
import {useEffect, useState} from "react";
import usersJSON from './users.json';
import UserList from "./UserList";
import Filter from "./Filter";

function App() {;
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    useEffect(() => {
        setUsers(usersJSON.users);
        setFilteredUsers(usersJSON.users)
    }, []);
  return (
        <div className="App">
          <h1> Kolokwium</h1>
            <Filter users={users} setUsers={setFilteredUsers}/>
            <UserList users={filteredUsers}/>
        </div>
  );
}

export default App;
