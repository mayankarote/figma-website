import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "./../assests/logo.jpg";

export default function Header1() {
  const [statename, setStatename] = useState([]);

  useEffect(() => {
    const selectValue = localStorage.getItem("selectValue");
    setStatename({ selectValue });
  }, []);

  const logout = () => {
    if (window.confirm("Do you want to logout :( ?")) {
      localStorage.clear();
      window.location.href = "/";
    } else {
      window.history.pushState(null, null, window.location.pathname);
    }
  };

  return (
    <div className="header">
      {/* logo */}
      <img className="header__logo" src={Logo} alt="" />
      {/* Navbar */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__welcome">
            Welcome, {statename.selectValue}
          </span>
        </div>
        <div className="header__profile">
          <span>Profile </span>
          <span>| </span>
          <span style={{ cursor: "pointer" }} onClick={logout}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
