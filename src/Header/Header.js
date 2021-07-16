import React from "react";
import Logo from "./../assests/logo.jpg";
import { Bars, Nav, NavLink } from "./NavbarElements";

export default function Header() {
  return (
    <Nav>
      <NavLink to="./grade">
        <Bars src={Logo} />
      </NavLink>
    </Nav>
  );
}
