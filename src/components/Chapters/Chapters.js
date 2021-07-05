import React from "react";
import "./Chapters.css";
import play from "../../assests/play.png";
import unBlock from "../../assests/unBlock.png";
import star from "../../assests/star.png";
import { storeProducts } from "./data";
import { useHistory } from "react-router-dom";

export default function Chapters() {
  const history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/game",
    });
  };
  return (
    <div className="chapt">
      <div className="chapt__container">
        <div className="chapt__container1">
          <div className="grid-container">
            {storeProducts.map((item) => (
              <div className="grid-item chapt__container3">
                <div className="chapt__title">{item.title}</div>
                <div className="chapt__info">
                  <p>{item.info}</p>
                </div>
                <div className="chapt__info2">
                  <p>{item.info2}</p>
                </div>
                <button className="chapt__img" onClick={onClick}>
                  {item.btnValue === "Play" ? (
                    <img src={play} alt="" className="chapt__play" />
                  ) : (
                    <img src={unBlock} alt="" className="chapt__unblock " />
                  )}
                  <div className="play__unBlock">{item.btnValue}</div>
                </button>
                <div>
                  <button className="freeDemoo__btn">Free Demo</button>
                  <img src={star} alt="" className="starr" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chapt__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
    </div>
  );
}
