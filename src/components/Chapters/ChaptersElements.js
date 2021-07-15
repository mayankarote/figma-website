import styled from "styled-components";

export const ChapContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
`;

export const ChapItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
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
  height: 320px;
  margin: 3rem;
  background: white;
  padding: 0.8rem;
  border: 2px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  opacity: 0.95;
`;

export const ChapP = styled.p`
  font-weight: bold;
  text-align: justify;
  font-size: 25px;
  line-height: 34px;
  color: #000000;
  margin-left: 1rem;
`;

export const ChapP2 = styled.p`
  font-size: 20px;
  line-height: 1.5em;
  margin-left: 1rem;
  margin-top: 1rem;
  color: #0c2657;
`;
export const ChapP3 = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3em;
  margin-left: 1rem;
  margin-top: 1.2rem;
  color: #0c2657;
`;

export const ChapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 145px;
  height: 50px;
  margin-top: 1rem;
  background: #ff8f50;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 31px;
`;

export const ChapIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  text-align: left;
  margin-right: 1rem;
`;

export const Chap4 = styled.p`
  font-weight: 600;
  font-size: 19px;
  color: white;
  text-align: center;
`;

export const ChapAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

export const ChapBtn1 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  width: 140px;
  height: 46px;
  padding: 0.5rem;
  cursor: pointer;
  mix-blend-mode: normal;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 31px;
  color: #111;
  font-size: 17px;
`;

export const ChapStar = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
`;
