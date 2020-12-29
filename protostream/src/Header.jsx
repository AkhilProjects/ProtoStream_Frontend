import React from "react";
import "./css/header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <h3 className="logo">ProtoStream</h3>
      </NavLink>
      <ul>
        <NavLink to="/" className="navlink">
          <li>Home</li>
        </NavLink>
        <NavLink to="/projects" className="navlink">
          <li>Projects</li>
        </NavLink>
        <NavLink to="/internships" className="navlink">
          <li>Internships</li>
        </NavLink>
        <NavLink to="/schemes" className="navlink">
          <li>Schemes</li>
        </NavLink>
        <NavLink to="/about" className="navlink">
          <li>About</li>
        </NavLink>
      </ul>
      <div className="btns">
        <NavLink to="/login" className="buttons">
          <button className="btn login-btn">Login</button>
        </NavLink>
        <NavLink to="/signup" className="buttons">
          <button className="btn signup-btn">Sign up</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
