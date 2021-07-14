import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0rem calc((100vw - 1300px) / 2);
  max-height: 100vh;
  background: #0c2657;
  margin: 0 auto;
`;

export const HomeItemsTwo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 600px;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const StepAppLogo = styled.img`
  width: 300px;
  height: 100px;
  margin: 0rem 1rem;
`;

export const HomeH1 = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin: 2.5rem 1rem;
`;
export const HomeSelect = styled.div`
  padding: 1rem 2rem;
`;

export const HomeBtn = styled.button`
  background-color: #ffc000;
  color: #111;
  padding: 1rem 2rem;
  width: 550px;
  height: 75px;
  border-radius: 80px;
  font-size: 25px;
`;