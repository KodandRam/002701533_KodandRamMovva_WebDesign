import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

function LoginForm({ setToken }) {
  const [username, setUserName] = useState();
  const [email, setEmailId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside onsubmit");
    const credentials = {
      username,
      email,
      password,
    };
    return fetch("http://localhost:9000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        console.log(data.token);
        if (data.token === "success") {
          setToken("success");
          console.log("login sucsscessful");
        } else {
          setToken("fail");
          console.log("login unsuccessful");
        }
      });
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Email ID:</p>
          <input type="text" onChange={(e) => setEmailId(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

function Dashboard() {
  return <h1>Welcome to the Dashboard!</h1>;
}

export default function Login({ setToken }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <LoginForm setToken={setToken} />;
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
