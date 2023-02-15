import React from "react";

import { useDispatch } from "react-redux";

// Importing the reducer functions from slice !
import { login, logout } from "../Features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          onClick={() =>
            dispatch(
              login({
                name: "Mouli VJ",
                email: "mouli.vj@gmail.com",
                age: 25,
                company: "SignEassy",
                role: "Front_End_Developer",
                salary: "18,00,000",
              })
            )
          }
        >
          Login
        </button>

        <button onClick={() => dispatch(logout())}>Log_out</button>
      </div>
    </>
  );
};

export default Login;
