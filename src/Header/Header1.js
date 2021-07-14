import React, { useState, useEffect } from "react";
import Logo from "./../assests/logo.jpg";
import { Link } from "react-router-dom";
import { Icon, Nav, NavItems, NavProfile, NavWelcome } from "./NavbarElements";

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
      <Link to="./grade">
        <Icon src={Logo}></Icon>
      </Link>
      <NavItems>
        <NavWelcome>Welcome, {statename.selectValue}</NavWelcome>
        <NavProfile>Profile </NavProfile>
        <NavProfile>| </NavProfile>
        <NavProfile style={{ cursor: "pointer" }} onClick={logout}>
          Logout
        </NavProfile>
      </NavItems>
    </Nav>
  );
}
