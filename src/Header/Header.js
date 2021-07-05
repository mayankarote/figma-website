import React from "react";
import "./Header.css";
import Logo from "./../assests/logo.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      {/* logo */}
      <Link to="./grade">
        <img className="header__logo" src={Logo} alt="" />
      </Link>
      {/* Navbar */}
      {/* <div className="header__nav">
        <div className="header__option"></div>
        <div className="header__profile"></div>
      </div> */}
    </div>
  );
}
