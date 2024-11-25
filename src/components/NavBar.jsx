import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">Map-Tales</Link>
    </div>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/create-story">Create Story</Link>
      <Link to="/your-stories">Your Stories</Link>
    </div>
  </nav>
);

export default NavBar;