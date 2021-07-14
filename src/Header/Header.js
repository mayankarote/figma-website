import React from "react";
import Logo from "./../assests/logo.jpg";
import { Icon, Nav, NavLink } from "../components/Navbar/NavbarElements";

export default function Header() {
  return (
    <Nav>
      <NavLink to="./grade">
        <Icon src={Logo}></Icon>
      </NavLink>
    </Nav>
  );
}
