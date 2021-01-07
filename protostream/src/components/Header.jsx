import React, { useState } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="header">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="" className="logo" />
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/internships"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Internships
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/schemes"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Schemes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </NavLink>
        </li>
      </ul>
      <NavLink to="/login" className="buttons">
        <button className="btn">Login</button>
      </NavLink>
    </header>
  );
};

export default Header;
