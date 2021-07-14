import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  height: 650px;
  width: 700px;
`;

export const FormInput = styled.div`
  color: #111;
  padding: 1rem 2rem;
  width: 550px;
  height: 75px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background: #ffffff;
  border-radius: 80px;
  color: black;
  font-size: 20px;
  margin: 2rem;
  outline: none;
`;

export const FormP = styled.p`
  font-size: 20px;
  color: white;
  text-align: right;
`;

export const FormError = styled.p`
  font-size: 15px;
  color: red;
  text-align: right;
`;

export const HomeH1 = styled.h1`
  font-size: 1.2rem;
  color: white;
`;

export const LoginBtn = styled.button`
  background-color: #ffc000;
  color: #111;
  padding: 1rem 2rem;
  width: 550px;
  height: 75px;
  border-radius: 80px;
  font-size: 25px;
  margin: 2rem;
`;
