import styled from "styled-components";

export const LoginForm = styled.div`
  @media screen and (max-width: 650px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }
`;

export const FormInput = styled.div`
  color: #111;
  padding: 1rem 2rem;
  width: 500px;
  height: 70px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background: #ffffff;
  border-radius: 80px;
  color: black;
  font-size: 15px;
  margin: 2rem;
  outline: none;
  @media screen and (max-width: 650px) {
    width: 100%;
    width: 300px;
    height: 65px;
  }
`;

export const FormP = styled.p`
  font-size: 15px;
  color: white;
  text-align: right;
  @media screen and (max-width: 650px) {
    margin: 1rem;
    font-size: 13px;
  }
`;

export const FormError = styled.p`
  font-size: 15px;
  color: red;
  text-align: right;
`;

export const LoginBtn = styled.button`
  background-color: #ffc000;
  color: #111;
  padding: 1rem 2rem;
  width: 500px;
  height: 70px;
  border-radius: 80px;
  font-size: 18px;
  margin: 2rem;
  @media screen and (max-width: 650px) {
    width: 100%;
    width: 300px;
    height: 65px;
  }
`;
