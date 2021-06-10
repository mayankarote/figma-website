import React from "react";
import "./Header.css";
import Logo from "./assests/logo.jpg";
export default function Header() {
  return (
    <div className="header">
      {/* logo */}
      <img className="header__logo" src={Logo} alt="" />
      {/* Navbar */}
    </div>
  );
}
