import styled from "styled-components";

export const HomeContainer = styled.div`
  max-height: 100%;
`;
export const HomeContentThree = styled.div`
  background: white;
  margin: 0 auto;
  max-height: 100vh;
`;

export const HomeItemsfour = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 650px) {
    max-width: 100%;
    height: 100%;
  }
`;

export const WhiteFourCard = styled.div`
  width: 400px;
  margin: 1rem;
  padding: 0.5rem;
  border: 2px solid rgb(241, 238, 238);
  border-radius: 5px;
  opacity: 35%;
`;
export const WhiteFourCardHighlight = styled.div`
  width: 400px;
  margin: 1rem;
  padding: 0.5rem;
  border: 2px solid #efefef;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 5px;
`;

export const CardImg = styled.img`
  width: 40px;
  height: 30px;
  margin: 0rem 1rem;
`;
export const CardInfo = styled.div`
  margin: 1rem 1rem;
`;

export const CardUserPicImg = styled.img`
  margin: 0.12rem 0rem;
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
