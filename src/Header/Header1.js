import React, { useState, useEffect } from "react";
import Logo from "./../assests/logo.jpg";
import {
  Bars,
  Nav,
  NavItems,
  NavItems2,
  NavItems3,
  NavLink,
  NavMenu,
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
        <Bars src={Logo} />
      </NavLink>
      <NavMenu>
        <NavItems>
          <p>Welcome, {statename.selectValue}</p>
        </NavItems>
        <NavItems2>
          <p>Profile |</p>
        </NavItems2>
        <NavItems3>
          <p onClick={logout}> Logout</p>
        </NavItems3>
      </NavMenu>
    </Nav>
  );
}
