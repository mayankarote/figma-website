import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
`;

export const HomeContentOne = styled.div`
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  height: calc(100px + 150px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1400px) / 2);
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HomeP = styled.p`
  font-size: 20px;
  line-height: 1.3em;
  margin-left: 1rem;
`;

export const HomeP2 = styled.p`
  font-size: 35px;
  line-height: 1.3em;
  margin-left: 1rem;
  margin-top: 1.5rem;
  color: #0c2657;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 4rem;
  right: 0;
  cursor: pointer;
`;

export const SVGIcon = styled.img`
  width: 110%;
  height: 241px;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
