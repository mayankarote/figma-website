import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HomeContentOne = styled.div`
  background: linear-gradient(253.58deg, #ffc000 1.55%, #ff8a00 95.8%);
  height: calc(100px + 241px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1800px) / 2);
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0rem 1rem;
  width: 650px;
  color: #fff;
  @media screen and (max-width: 650px) {
    width: 100%;
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
  height: 240px;
  margin-left: 15rem;
`;

// fourth part is start

export const HomeContentFour = styled.div`
  // height: calc(100vw + 800px);
  // max-height: 100%;
`;

export const HomeItemsfour = styled.div`
  display: flex;
  flex-wrap: wrap;
  // flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0rem 1rem;
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    height: 100vh;
    display: flex;
    padding: 0rem 1rem;
    // flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    // margin: 35rem 0rem;
    background: yellow;
  }
`;

export const WhiteFourCard = styled.div`
  width: 450px;
  margin: 2rem;
  padding: 0.5rem;
  border: 2px solid rgb(241, 238, 238);
  border-radius: 5px;
  opacity: 35%;
`;
export const WhiteFourCardHighlight = styled.div`
  width: 450px;
  margin: 2rem;
  padding: 0.5rem;
  border: 2px solid #efefef;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 5px;
`;

export const CardImg = styled.img`
  width: 45px;
  height: 45px;
  margin: 0rem 1rem;
`;
export const CardInfo = styled.div`
  margin: 1rem 1rem;
`;

export const CardUserPicImg = styled.img`
  margin: 0.15rem 0rem;
`;

export const CardHeading = styled.p`
  font-size: 15px;
  font-weight: 600;
`;
export const CardsubTitle = styled.p`
  font-size: 15px;
`;

export const CardTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #5c5c5c;
  text-align: justify;
`;
