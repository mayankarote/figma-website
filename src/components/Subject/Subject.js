import React from "react";
import "./Subject.css";
import { useHistory } from "react-router-dom";
import star from "../../assests/star.png";
import image from "../../assests/image.png";

export default function Subject() {
  let history = useHistory();

  const alertMsg = () => {
    console.log("yes you Clicked");
    alert("No Data Available");
  };
  const onClickScience = () => {
    history.push({
      pathname: "/chapters",
    });
  };

  return (
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1">
          <div className="subject__group1">
            <div className="subject_modelone"></div>
            <div className="subject__modeltwo"></div>
            <div className="subject__modelthree">
              <div className="subject__ecllipse" />
              <img src={image} alt="" className="subject__image" />
              <p className="subject__freeDemo">Free Demo</p>
              <p className="subject__freeDemotext">
                Play the FREE demo chapters to understand how your speed and
                accuracy will make you win
              </p>
              <p></p>
            </div>
          </div>
          <div className="grade__group2">
            <div className="grade__box1">
              <p className="learn__science">Learn Science</p>
              <p className="inner__text">Light Magnetism +6 more Chapters</p>
              <p className="__chapters">8 Chapters</p>
              <button
                className="free__demo free_demotext"
                onClick={onClickScience}
              >
                Free Demo
              </button>
              <img src={star} alt="" className="star" />
            </div>

            <div className="grade__box2">
              <p className="learn__math">Learn Math</p>
              <p className="info__text1">
                Playing with Numbers
                <p>Number System,</p>
                +7 more chapters
              </p>
              <p className="__chapters1">9 Chapters</p>
              <button className="free__demo1 free_demotext" onClick={alertMsg}>
                Free Demo
              </button>
              <img src={star} alt="" className="star1" />
            </div>
          </div>
        </div>
        {/* login container 2 end */}
        <div className="subject__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* login container end  */}
    </div>
  );
}
