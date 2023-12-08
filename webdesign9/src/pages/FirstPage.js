import React from "react";
import Navbar from "../components/Login/Navbar";
//import Login from "./components/Login/Login";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Jobs from "./Jobs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";


function FirstPage() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
        
          {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default FirstPage;