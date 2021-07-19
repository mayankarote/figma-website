import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  font-weight: bold;
  font-size: 1rem;
`;

export const NavLink = styled(Link)`
  color: yellow;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 15px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #111;
  p {
    transform: translate(-75%, 50%);
    font-weight: bold;
  }
`;

export const NavIcon1 = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #ff8a00;
  p {
    transform: translate(-35%, 50%);
  }
`;
export const NavIcon2 = styled.div`
  cursor: pointer;
  color: #ff8a00;
  p {
    transform: translate(-35%, 50%);
  }
`;

export const Bars = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 25px;
  border: 9px solid white;
  transform: translate(20%, 25%);
`;
