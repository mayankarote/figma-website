import React, { useState, useEffect } from "react";
import "./Header1.css";
import Logo from "./../assests/logo.jpg";
import { Icon, Nav, NavLink } from "../components/Navbar/NavbarElements";

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
    <Nav>
      <NavLink to="./grade">
        <Icon src={Logo}></Icon>
      </NavLink>

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
    </Nav>
  );
}
