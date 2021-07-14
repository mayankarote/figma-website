import styled from "styled-components";

export const ChapContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

export const ChapItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  background: #0c2651;

  color: #fff;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const WhiteFourCard = styled.div`
  width: 450px;
  margin: 2rem;
  padding: 0.5rem;
  border: 2px solid #efefef;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 5px;
`;

export const ChapP = styled.p`
  font-size: 20px;
  line-height: 1.3em;
  margin-left: 1rem;
`;

export const ChapP2 = styled.p`
  font-size: 35px;
  line-height: 1.3em;
  margin-left: 1rem;
  margin-top: 1.5rem;
  color: #0c2657;
`;

export const ChapIcon = styled.div`
  display: block;
  position: absolute;
  top: 4rem;
  right: 0;
  cursor: pointer;
`;

export const HomeH1 = styled.h1`
  font-size: 1.5rem;
  color: white;
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
