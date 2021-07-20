import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
`;

export const HomeContentOne = styled.div`
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  height: calc(100px + 240px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1700px) / 2);
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0rem 1rem;
  width: 650px;
  color: #fff;
  @media screen and (max-width: 650px) {
    max-width: 100%;
  }
`;

export const HomeP = styled.p`
  font-size: clamp(1.1rem, 1vw, 1rem);
  line-height: 1.3em;
  margin-bottom: 0.5rem;
  padding: 0.1rem;
`;

export const HomeP2 = styled.p`
  font-size: clamp(2.2rem, 1vw, 1rem);
  line-height: 1.3em;
  font-weight: bold;
  padding: 0.1rem;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 5rem;
  right: 0;
`;

export const SVGIcon = styled.img`
  width: 100rem;
  height: 250px;
  margin-left: 20rem;
  @media screen and (max-width: 650px) {
    width: 90rem;
    height: 230px;
    margin-left: 10rem;
  }
`;

// fourth part is start
