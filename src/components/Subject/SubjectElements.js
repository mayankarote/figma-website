import styled from "styled-components";

export const SubjectContainer = styled.div`
  max-height: 100vh;
`;
export const SubjectContent = styled.div`
  max-height: 100%;
  height: calc(100vh - 80px);
  background: #0c2651;
  padding: 0rem calc((100vw - 1800px) / 2);
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
  margin: 3rem;
  background-color: #ffffff;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
`;
export const ModelTwo = styled.div`
  width: 500px;
  height: 500px;
  margin: 3rem;
  background-color: #ffffff;
  opacity: 0.95;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
`;
export const ModelThree = styled.div`
  width: 500px;
  height: 300px;
  margin: 3rem;
  background-color: #ffffff;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
`;

export const GradeBigCirlce = styled.div`
  width: 149px;
  height: 149px;
  background: linear-gradient(180deg, #ff8a00 13.64%, #ffc000 100%);
  border-radius: 100%;
`;

export const ChapP = styled.p`
  font-size: 45px;
  line-height: 117.3%;
  text-align: center;
  color: #1b1f5f;
  margin: 7rem;
`;

export const ChapP2 = styled.p`
  font-weight: bold;
  font-size: 70px;
  color: #0c2657;
  text-align: center;
  margin-top: 3rem;
`;
export const GradeCirlceSelected = styled.div`
  cursor: pointer;
  background: linear-gradient(
    253.58deg,
    #ffc000 1.55%,
    #ff8a00 95.8%
  ) !important;
  width: 110px !important;
  height: 110px !important;
  border: 4px solid #ffffff !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
`;
export const NavIcon = styled.div`
  margin: 0 auto;
`;

export const GradeSmallCirlce5 = styled.p`
  width: 98.83px;
  height: 98.83px;
  background: #ffffff;
  border: 2px solid #979797;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 100px;
  margin-top: 100px;
`;

export const GradeSmallCirlce6 = styled.div`
  width: 98.83px;
  height: 98.83px;
  background: #ffffff;
  border: 2px solid #979797;
  cursor: pointer;
  border-radius: 50%;
`;

export const ChapP3 = styled.div`
  margin-top: 1.5rem;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3em;
  text-align: center;
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
