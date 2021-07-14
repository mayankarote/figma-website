import React, { useState } from "react";
import "./ChapIntro.css";
import play from "../../assests/play.png";
import CollapeIcon from "../../assests/icons/CollapseIcon";
import blackplayBtn from "../../assests/blackplayBtn.png";
import { useHistory } from "react-router-dom";
import HideShowcontent from "./HideShowcontent";

export default function Chapdescription() {
  const [state, setState] = useState(true);

  let history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/chapdetail",
    });
  };

  return (
    <div className="chapdescription">
      <div className="chapdescription__container">
        <div className="chapdescription__container1">
          <div className="chap__nameBox">
            <p className="chap__name1">Light </p>
            <img src={play} alt="" className="chap__play" />
            <p className="chap__name2">Introduction to light </p>
          </div>
          <div className="hide_show">
            <div
              className="chap__rectangle"
              onClick={() => setState((v) => !v)}
            >
              <CollapeIcon />
            </div>
          </div>
          <div className="chap__verticleLine" />
          {state && <HideShowcontent />}
          <div className="chap__bigRectangle">
            <img src={blackplayBtn} alt="" className="blackplayBtn" />
            <div className="smallCricle"></div>
          </div>
          <p className="chap__light">Light</p>
          <p className="chap__lightdescription">
            Light is a form of
            <label className="chap__lightdescription_text"> energy </label>
            which makes things
            <label className="chap__lightdescription_text"> visible.</label>
          </p>
          <p className="chap__lightdescription2">
            An object becomes visible to us when light after striking the object
            reaches our eye
          </p>
          <p className="chap__lightdescription3">
            Light itself is not visible, but it makes objects visible to us
          </p>
          <button
            className="chap__playQuiz chap__playQuiztext"
            onClick={onClick}
          >
            Play Quiz
          </button>
        </div>
        <div className="chapdescription__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* {/ login container end  /} */}
    </div>
  );
}
