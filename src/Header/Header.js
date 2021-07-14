import React from "react";
import Logo from "./../assests/logo.jpg";
import { Icon, Nav } from "./NavbarElements";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Nav>
      <Link to="./grade">
        <Icon src={Logo}></Icon>
      </Link>
    </Nav>
  );
}
