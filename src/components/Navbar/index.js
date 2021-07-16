import React, { useEffect, useState } from "react";
import {
  Bars,
  Nav,
  NavIcon,
  NavIcon1,
  NavIcon2,
  NavLink,
} from "./NavbarElements";
import Logo from "../../assests/logo.jpg";

function Navbar() {
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
      <NavLink to="grade">
        <Bars src={Logo}></Bars>
      </NavLink>
      <NavIcon1>
        <p>Profile |</p>
        <NavIcon2>
          <p>Logout</p>
        </NavIcon2>
      </NavIcon1>

      <NavIcon>
        <p>Welcome, {statename.selectValue}</p>
      </NavIcon>
    </Nav>
  );
}

export default Navbar;
