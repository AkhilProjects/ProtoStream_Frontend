import React from "react";
import "./css/header.css";

const Header = () => {
  return (
    <header className="header">
      <h3 className="logo">ProtoStream</h3>
      <ul>
        <li className="active">Home</li>
        <li>Resources</li>
        <li>About</li>
        <li>Technical Skills</li>
      </ul>
      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
