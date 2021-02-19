import React, { useState } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { isAuthenticated } from "../auth";

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
        {isAuthenticated() && isAuthenticated().user.role === 0 ? (
          <li className="nav-item">
            <NavLink
              to="/user/dashboard"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Dashboard
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
        )}
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
        {isAuthenticated() && isAuthenticated().user.role === 1 ? (
          <NavLink to="/user/startups" className="buttons">
            <button className="btn">Startups</button>
          </NavLink>
        ) : (
          <li className="nav-item">
            <NavLink
              to="/startups"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Startups
            </NavLink>
          </li>
        )}
      </ul>
      {!isAuthenticated() ? (
        <NavLink to="/login" className="buttons">
          <button className="btn">Login</button>
        </NavLink>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
