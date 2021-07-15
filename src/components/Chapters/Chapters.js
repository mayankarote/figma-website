import React from "react";
import "./Chapters.css";
import play from "../../assests/play.png";
import unBlock from "../../assests/unBlock.png";
import star from "../../assests/star.png";
import { storeProducts } from "./data";
import { useHistory } from "react-router-dom";
import {
  Chap4,
  ChapBtn,
  ChapContainer,
  ChapIcon,
  ChapItems,
  ChapP,
  ChapP2,
  ChapP3,
  WhiteFourCard,
  ChapStar,
  ChapBtn1,
  ChapAlign,
} from "./ChaptersElements";
import Footer from "../Footer";

export default function Chapters() {
  const history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/game",
    });
  };
  return (
    <ChapContainer>
      <ChapItems>
        {storeProducts.map((item) => (
          <>
            <WhiteFourCard>
              <ChapAlign>
                <ChapBtn1>
                  <ChapStar src={star} alt="" />
                  <>Free Demo</>
                </ChapBtn1>
              </ChapAlign>

              <ChapP>{item.title}</ChapP>
              <ChapP2>{item.info}</ChapP2>
              <ChapP3>{item.info2}</ChapP3>
              <ChapAlign>
                <ChapBtn onClick={onClick}>
                  {item.btnValue === "Play" ? (
                    <ChapIcon src={play} alt="" />
                  ) : (
                    <ChapIcon src={unBlock} alt="" />
                  )}
                  <Chap4>{item.btnValue}</Chap4>
                </ChapBtn>
              </ChapAlign>
            </WhiteFourCard>
          </>
        ))}
      </ChapItems>
      <Footer />
    </ChapContainer>
  );
}
