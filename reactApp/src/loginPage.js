import React, { useContext, useState } from "react";
import { AuthContext } from "./authContext";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input
        id="username"
        placeholder="user name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <br />
      <input
        id="password"
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={login}>Log in</button>
      <p>
        Not Registered?
        <Link to="/signup">Sign Up!</Link>
      </p>
    </>
  );
};

export default LoginPage;
