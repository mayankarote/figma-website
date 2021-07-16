import React, { useState, useEffect } from "react";
import Logo from "./../assests/logo.jpg";
import { Link } from "react-router-dom";
import {
  Icon,
  Nav,
  NavItems,
  NavItems2,
  NavItems3,
  NavLink,
  NavProfile,
  NavWelcome,
} from "./NavbarElements";

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
      <NavItems>
        <p>Welcome, {statename.selectValue}</p>
      </NavItems>
      <NavItems2>
        <p>Profile | </p>
      </NavItems2>
      <NavItems3>
        <p onClick={logout}> Logout</p>
      </NavItems3>
    </Nav>
  );
}
