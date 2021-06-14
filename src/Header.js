import React from "react";
import "./Header.css";
import Logo from "./assests/logo.jpg";
export default function Header() {
  return (
    <div className="header">
      {/* logo */}
      <img className="header__logo" src={Logo} alt="" />
      {/* Navbar */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__welcome">Welcome, Mayanka</span>
        </div>
        <div className="header__profile">
          <span>Profile </span>
          <span>| </span>
          <span>Logout </span>
        </div>
      </div>
    </div>
  );
}
