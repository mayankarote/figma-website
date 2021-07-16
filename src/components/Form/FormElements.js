import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 2rem;
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
`;

export const FormP = styled.p`
  font-size: 15px;
  color: white;
  text-align: right;
`;

export const FormError = styled.p`
  font-size: 15px;
  color: red;
  text-align: right;
`;

export const HomeH1 = styled.h1`
  font-size: 0.8rem;
  color: white;
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
`;
