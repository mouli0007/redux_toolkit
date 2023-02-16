import React, { useState } from "react";
import "./App.css";

// Used to get the current value from the store !
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  deleteUser,
  clear_list,
  update_username,
} from "./Features/Users";
function App() {
  const userList = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const usersData = (name, username) => {
    return {
      id: Date.now(),
      name,
      username,
    };
  };
  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Enter Your name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="UserName... ."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => dispatch(addUser(usersData(name, userName)))}>
          AddUser
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <>
              <div key={user.id}>
                <h2>{user.name}</h2>
                <h3>{user.username}</h3>
                <input
                  type="text"
                  placeholder="Update the username"
                  onChange={(e) => setNewUserName(e.target.value)}
                />
                <button
                  onClick={() =>
                    dispatch(
                      update_username({ id: user.id, username: newUserName })
                    )
                  }
                >
                  Update user_name
                </button>
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Remove User
                </button>
              </div>
            </>
          );
        })}
      </div>

      {userList.length > 0 && (
        <button onClick={() => dispatch(clear_list())}>Clear List</button>
      )}
    </div>
  );
}

export default App;
