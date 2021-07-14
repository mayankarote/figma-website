import styled from "styled-components";

export const Nav = styled.nav`
  background: white;
  height: 80px;
`;

export const Icon = styled.img`
  position: absolute;
  width: 110px;
  left: 100px;
  border-radius: 30px;
  border: 12px solid white;
  z-index: 1;
  cursor: pointer;
`;

export const NavItems = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  backgound: red;
  font-weight: bold;
`;

export const NavWelcome = styled.p`
  font-size: 20px;
  text-align: right;
`;

export const NavProfile = styled.p`
  font-size: 20px;
  color: #ff8a00;
  cursor: pointer;
  margin-left: 1rem;
`;
