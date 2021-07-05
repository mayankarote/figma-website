import React, { useState } from "react";
import "./Chapdetail.css";
import play from "../../assests/play.png";
import verticleLine from "../../assests/Line.png";
import rectangle from "../../assests/Rectangle.png";
import triangle from "../../assests/Triangle.png";
import smalltriangle from "../../assests/smallTriangle.png";
import zigzagCircle from "../../assests/zigzagCircle.png";
import smallCircle1 from "../../assests/smallCircle1.png";
import colorfulRing from "../../assests/colorfulRing.png";
import { useHistory } from "react-router-dom";

export default function Chapdetail() {
  const [state, setState] = useState(false);

  let history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/chapintro",
    });
  };
  return (
    <div className="chapdetaildetail">
      <div className="chapdetaildetail__container">
        <div className="chapdetaildetail__container1">
          <div className="chapdetail__nameBox">
            <p className="chapdetail__name1">Light </p>
            <img
              src={play}
              alt=""
              className="chapdetail__play"
              onClick={() => setState(!state)}
            />
            {state && (
              <p className="chapdetail__name2">Introduction to light </p>
            )}
          </div>
          <div>
            <img
              src={verticleLine}
              alt=""
              className="chapdetail__verticleLine"
            />
            <img src={rectangle} alt="" className="chapdetail__rectangle" />
            <img src={triangle} alt="" className="chapdetail__triangle" />
            <img
              src={smalltriangle}
              alt=""
              className="chapdetail__smalltriangle"
            />
            <div className="chapdetail__descriptionBigRectangle"></div>
            <div className="chapdetail__smallCircleBox">
              <img
                src={smallCircle1}
                alt=""
                className="chapdetail__smallCircle1"
              />
              <p className="chapdetail__smallCircle1text">1</p>
              <img
                src={zigzagCircle}
                alt=""
                className="chapdetail__smallCircle2"
              />
              <img
                src={zigzagCircle}
                alt=""
                className="chapdetail__smallCircle3"
              />
              <img
                src={zigzagCircle}
                alt=""
                className="chapdetail__smallCircle4"
              />
              <div className="chapdetail__middleHeading">
                Light affects our eyes to produce the sensation of Vision{" "}
              </div>
              <img src={colorfulRing} alt="" className="chap__colorfulRing" />
              <p className="chap__tenSec">10 s</p>
              <button className="chap__trueBtn chap__trueBtntext">True</button>
              <button className="chap__falseBtn chap__falseBtntext">
                True
              </button>
            </div>

            <button
              className="chapdetail__playQuiz chapdetail__playQuiztext"
              onClick={onClick}
            >
              Back To Lesson
            </button>
          </div>
        </div>
        <div className="chapdetaildetail__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* {/ login container end  /} */}
    </div>
  );
}
