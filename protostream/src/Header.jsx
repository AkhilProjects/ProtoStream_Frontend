import React from "react";
import "./css/header.css";

const Header = () => {
  return (
    <header className="header">
      <h3 className="logo">ProtoStream</h3>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Internships</li>
        <li>Schemes</li>
        <li>About</li>
      </ul>
      <div className="btns">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
