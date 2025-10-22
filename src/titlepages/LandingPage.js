import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';
import bgImage from "../assets/images/landing-bg.jpg"; // Put a background image here

function LandingPage() {
  return (
    <div 
      className="landing-page" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1>Cyrene's Plant Haven</h1>
      <p>Discover magical houseplants inspired by the elegance of Cyrene!</p>
      <Link to="/products">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
