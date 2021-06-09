import React from "react";
import "./nav.styles.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function Navigation() {
  return (
    <div className="topnav">
      <div className="link-container">
        <Link exact to="/" className="logo">
          <img src={logo} alt="" />
        </Link>

        <div className="navs">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/shop">
            Shop
          </NavLink>
          <NavLink exact to="/about">
            About
          </NavLink>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
