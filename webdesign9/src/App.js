import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Login/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Jobs from "./pages/Jobs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

import React, { useState } from "react";
import PropTypes from "prop-types";
import FirstPage from "../src/pages/FirstPage.js";

function App() {
  const [name, setName] = useState("");
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter a valid name");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      alert("Password should have at least 6 characters");
      return;
    }

    const credentials = {
      name,
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
        console.log(" handle submit--> json data " + data);
        console.log(data.token);
        if (data.token === "success") {
          setToken("success");
          console.log("login successful");
        } else {
          alert("Wrong credentials");
          setToken("fail");
          console.log("login unsuccessful");
        }
      });
  };

  return token === "success" ? (
    <FirstPage />
  ) : (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter name"
              required
            />
          </div>
          <br />
          <div className="form-group mt-3">
            <label>Email : </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmailId(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <br />
          <div className="form-group mt-3">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <br />
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          {token === "fail" && <div>Wrong Credentials</div>}
        </div>
      </form>
    </div>
  );
}

export default App;
