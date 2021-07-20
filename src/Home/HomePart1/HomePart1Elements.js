import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
`;

export const HomeContentContanerThree = styled.div`
  background: white;
  max-height: 100vh;
  max-height: 100%;
  height: calc(100px + 240px);
`;
export const HomeContentThree = styled.div`
  background: pink;
  padding: 0rem calc((100vw - 1300px) / 2);
  max-height: 100vh;
`;

export const HomeItemsThree = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  @media screen and (max-width: 650px) {
    max-width: 100%;
    height: 100%;
  }
`;

export const ProductCard = styled.div`
  width: 350px;
  margin: 1.5rem;
  padding: 0.55rem;
`;

export const HomeYellowCircle = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 100px;
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  margin: 0rem 6rem;
`;

export const ProductImg = styled.img`
  margin: 0rem 1.15rem;
`;
export const ProductInfo = styled.div`
  margin: 1rem 1rem;
`;

export const ProductsHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const ProductTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #5c5c5c;
  text-align: center;
`;

// colorLine

export const HomeLineDiv = styled.div`
  margin: 0rem 3rem;
`;
export const HomeLine = styled.img`
  margin: 0.5rem;
`;
export const Info = styled.div`
  margin: 0rem 1rem;
`;

export const WhatStdsSayHeading = styled.h1`
  font-weight: 600;
  font-size: 2.3rem;
  text-align: center;
  color: #ff8a00;
  margin: 1.5rem;
  @media screen and (max-width: 650px) {
    width: 100%;
    font-size: 2.1rem;
    margin: 1rem;
  }
`;
export const WhatStdsSayTitle = styled.p`
  font-size: 1.3rem;
  line-height: 2rem;
  text-align: center;
  color: #5c5c5c;
  @media screen and (max-width: 650px) {
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;
