import React from "react";
import "./Chapters.css";
import play from "../../assests/play.png";
import unBlock from "../../assests/unBlock.png";
import star from "../../assests/star.png";
import { storeProducts } from "./data";
import { useHistory } from "react-router-dom";
import {
  ChapContainer,
  ChapItems,
  ChapP,
  WhiteFourCard,
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
        <WhiteFourCard>
          {storeProducts.map((item) => (
            <>
              <ChapP>{item.title}</ChapP>
              {/* <ChapP><p>{item.info}</p></ChapP> */}
              <div className="chapt__info2">{/* <p>{item.info2}</p> */}</div>
              <button className="chapt__img" onClick={onClick}>
                {/* {item.btnValue === "Play" ? (
                  <img src={play} alt="" className="chapt__play" />
                ) : (
                  <img src={unBlock} alt="" className="chapt__unblock " />
                )} */}
                {/* <div className="play__unBlock">{item.btnValue}</div> */}
              </button>
              <button className="freeDemoo__btn">Free Demo</button>
              <img src={star} alt="" className="starr" />
            </>
          ))}
        </WhiteFourCard>
      </ChapItems>
      <Footer />
    </ChapContainer>
  );
}
