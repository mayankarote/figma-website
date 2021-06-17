import React, { useState, useEffect } from "react";
import "../Header.css";
import Logo from "../assests/logo.jpg";
import { useLocation } from "react-router-dom";

export default function Header1() {
  const [statename, setStatename] = useState([]);
  const location = useLocation();

  console.log("Header" + location.selectValue);

  useEffect(() => {
    const selectValue = localStorage.getItem("selectValue");
    setStatename({ selectValue });
    console.log("selectvaluename" + selectValue);
  }, []);

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
          <span>Logout </span>
        </div>
      </div>
    </div>
  );
}
