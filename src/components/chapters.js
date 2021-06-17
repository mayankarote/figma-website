import React, { useState } from "react";
import "./Subject.css";
import play from "../assests/play.png";
import unBlock from "../assests/unBlock.png";
import { storeProducts } from "./data";

export default function Chapters() {
  return (
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1">
          <div className="grid-container">
            {storeProducts.map((item) => (
              <div className="grid-item chap__container">
                <div className="chap__title">{item.title}</div>
                <div className="chap__info">
                  <p>{item.info}</p>
                </div>
                <div className="chap__info2">
                  <p>{item.info2}</p>
                </div>
                <div className="chap__img">
                  <img src={item.img} alt="" className="chap__play " />
                </div>
                <div className="play__unBlock">{item.btnValue}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="login__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
    </div>
  );
}
