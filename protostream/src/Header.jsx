import React from "react";
import "./css/header.css";

const Header = () => {
  return (
    <header className="header">
      <h3 className="logo">LOGO</h3>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Competition</li>
        <li>Jobs</li>
        <li>Projects</li>
        <li>Login</li>
      </ul>
    </header>
  );
}

export default Header;
