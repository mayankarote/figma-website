import styled from "styled-components";

export const SubjectContainer = styled.div`
  max-height: 100vh;
`;
export const SubjectContent = styled.div`
  max-height: 100%;
  height: calc(100vh + 100px);
  background: #0c2651;
  padding: 0rem calc((100vw - 1600px) / 2);
`;

export const SubjectItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  background: #0c2651;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const ModelOne = styled.div`
  width: 500px;
  height: 300px;
  margin: 4rem;
  background-color: #ffffff;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
`;
export const ModelTwo = styled.div`
  width: 500px;
  height: 300px;
  margin: 4rem;
  background-color: #ffffff;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
`;

export const YellowCirlce = styled.div`
  width: 149px;
  height: 149px;
  background: linear-gradient(180deg, #ff8a00 13.64%, #ffc000 100%);
  border-radius: 100%;
  margin-left: 7rem;
`;
export const SubjectIcon = styled.img`
  cursor: pointer;
  margin-left: 9rem;
  margin-top: -6rem;
`;

export const SubjP = styled.p`
  font-weight: 600;
  font-size: 25px;
  color: #5c5c5c;
  text-align: center;
  padding: 1rem;
`;

export const SubjP2 = styled.p`
  font-size: 18px;
  color: #5c5c5c;
  text-align: center;
`;

export const SubjP3 = styled.p`
  font-size: 25px;
  color: #5c5c5c;
  text-align: center;
`;

export const SubjModelP = styled.p`
  font-weight: 600;
  font-size: 25px;
  color: white;
  padding: 1rem;
`;

export const SubjModelP2 = styled.p`
  font-size: 18px;
  color: white;
  padding: 1rem;
`;
export const SubjModelP3 = styled.p`
  font-size: 25px;
  color: white;
  padding: 1rem;
`;

export const SubjectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 10rem;
`;

export const ModelGroup = styled.div`
  width: 450px;
  height: 330px;
  background: #ff8a48;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  margin: 2rem;
  padding: 1rem;
`;

export const ModelGroupTwo = styled.div`
  width: 450px;
  height: 330px;
  background: #1bb8ae;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  margin: 2rem;
  padding: 1rem;
`;

export const ChapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 125px;
  height: 40px;
  background: #fff1c7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 31px;
  color: #111;
  margin-left: 14rem;
  margin-top: -1rem;
  font-size: 15px;
  color: black;
`;
export const SubjectStar = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
`;
