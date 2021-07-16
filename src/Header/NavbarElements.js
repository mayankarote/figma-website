import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: white;
  height: 70px;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  border: 10px solid white;
`;

export const NavItems = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0px;
  cursor: pointer;
  color: #111;
  padding: 1rem;
  font-size: 15px;
  p {
    transform: translate(-130%, -30%);
    font-weight: bold;
  }
`;

export const NavItems2 = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0px;
  cursor: pointer;
  color: #111;
  padding: 1rem;
  font-size: 15px;
  p {
    transform: translate(-160%, -30%);
    font-weight: bold;
    color: #ff8a00;
    cursor: pointer;
  }
`;

export const NavItems3 = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0px;
  cursor: pointer;
  color: #111;
  padding: 1rem;
  font-size: 15px;
  p {
    transform: translate(-60%, -30%);
    font-weight: bold;
    color: #ff8a00;
    cursor: pointer;
  }
`;
