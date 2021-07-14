import React from "react";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/"></NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
