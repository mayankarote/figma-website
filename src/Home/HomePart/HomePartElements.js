import styled from "styled-components";

export const HomeContainerTwo = styled.div`
  padding: 0rem calc((100vw - 1300px) / 2);
  max-height: 100vh;
  background: #0c2657;
  margin: 0 auto;
`;

export const HomeItemsTwo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 500px;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const StepAppLogo = styled.img`
  width: 250px;
  height: 90px;
  margin: 2rem;
`;

export const HomeH1 = styled.h1`
  font-size: 1.3rem;
  color: white;
  margin-bottom: 2rem;
`;

export const HomeSelect = styled("Select")`
  width: 500px;
  height: 65px;
  border-radius: 50px;
  margin-bottom: 2rem;
  color: #111;
  padding: 1rem;
  @media screen and (max-width: 650px) {
    width: 250px;
    height: 65px;
    margin-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    color: #111;
  }
`;

export const HomeBtn = styled.button`
  background-color: #ffc000;
  color: #111;
  padding: 0.5rem 1rem;
  width: 500px;
  height: 65px;
  border-radius: 50px;
  font-size: 25px;
  @media screen and (max-width: 650px) {
    width: 250px;
    height: 65px;
  }
`;
