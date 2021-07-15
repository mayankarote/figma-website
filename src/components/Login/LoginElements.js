import styled from "styled-components";

export const LoginContainer = styled.div`
  max-height: 100vh;
  margin: 0 auto;
`;

export const LoginItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
  background: #0c2657;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const StepAppLogo = styled.img`
  width: 300px;
  height: 100px;
`;
