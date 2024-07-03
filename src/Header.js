import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home-icon">
        <img src="/home.svg" alt="Home" />
      </Link>
    </header>
  );
};

export default Header;
