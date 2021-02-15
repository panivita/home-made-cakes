import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/homemade-logo.png";

export const Header = () => {
  return <header className="header-container">
    <nav className="main-menu">
      <ul className="left-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="center-menu">
        <a href="/">
          <img src={Logo} alt="homemade with love" />
        </a>
      </div>
      <ul className="right-menu">
        <li>
          <Link to="/cakes">Cakes</Link>
        </li>
        <li>
          <Link to="/recipes">Blog</Link>
        </li>
      </ul>
    </nav>
  </header>;
};
