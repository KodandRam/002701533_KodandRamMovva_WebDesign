import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <button className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <Link to="/" className="logo" onClick={handleMobileMenuToggle}>
          The Tipsy Trail
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleMobileMenuToggle}>
            <li>Home</li>
          </Link>
          <Link to="/AboutUs" onClick={handleMobileMenuToggle}>
            <li>AboutUs</li>
          </Link>
          <Link to="/Jobs" onClick={handleMobileMenuToggle}>
            <li>Jobs</li>
          </Link>
          <Link to="/ContactUs" onClick={handleMobileMenuToggle}>
            <li>ContactUs</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
