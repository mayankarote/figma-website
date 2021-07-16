import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: white;
  height: 70px;
  display: flex;
  // justify-content: center;
`;

export const Bars = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 25px;
  border: 9px solid white;
  margin: 1rem;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-175%, 10%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -54px;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: #111;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavItems = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0px;
  cursor: pointer;
  color: #111;
  font-size: 15px;
  p {
    transform: translate(-130%, 50%);
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
  font-size: 15px;
  p {
    transform: translate(-170%, 50%);
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
  font-size: 15px;
  p {
    transform: translate(-70%, 50%);
    font-weight: bold;
    color: #ff8a00;
    cursor: pointer;
  }
`;
