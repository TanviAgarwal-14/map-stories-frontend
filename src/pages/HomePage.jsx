import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => (
  <div className="home-page">
    <h1>Map Tales</h1>
    <p>Mark locations on the map and share your stories with the world!</p>
    <Link to="/create-story">
      <button className="cta-button">Get Started!</button>
    </Link>
  </div>
);

export default HomePage;