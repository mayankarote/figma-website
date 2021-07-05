import React, { useState } from "react";
import "./Grade.css";
import bigCircle from "../../assests/bigCircle.png";
import { useHistory } from "react-router-dom";

export default function Grade() {
  const [selectedGrade, setSelectedGrade] = useState();

  const history = useHistory();
  const proceed = () => {
    if (!selectedGrade) {
      alert("Please select Grade");
    } else {
      history.push({
        pathname: "/subject",
      });
    }
  };
  return (
    <div className="gradee">
      <div className="gradee__container">
        <div className="gradee__container1">
          <div className="gradee__group">
            <div className="gradee__bigCircle">
              <img src={bigCircle} alt="" />
              <p className="gradee__select">Select Grade {selectedGrade}</p>
            </div>
            <div
              className={
                selectedGrade === 5
                  ? "gradee__smallCircleSelected gradee__smallCircle5"
                  : "gradee__smallCircle5"
              }
              onClick={() => setSelectedGrade(5)}
            >
              <p className="gradee_five">5th</p>
            </div>
            <div
              className={
                selectedGrade === 6
                  ? "gradee__smallCircleSelected gradee__smallCircle6"
                  : "gradee__smallCircle6"
              }
              onClick={() => setSelectedGrade(6)}
            >
              <p className="gradee_six">6th</p>
            </div>
            <div
              className={
                selectedGrade === 7
                  ? "gradee__smallCircleSelected gradee__smallCircle7"
                  : "gradee__smallCircle7"
              }
              onClick={() => setSelectedGrade(7)}
            >
              <p className="gradee_seven">7th</p>
            </div>
            <div
              className={
                selectedGrade === 8
                  ? "gradee__smallCircleSelected gradee__smallCircle8"
                  : "gradee__smallCircle8"
              }
              onClick={() => setSelectedGrade(8)}
            >
              <p className="gradee_eight">8th</p>
            </div>
            <div
              className={
                selectedGrade === 9
                  ? "gradee__smallCircleSelected gradee__smallCircle9"
                  : "gradee__smallCircle9"
              }
              onClick={() => setSelectedGrade(9)}
            >
              <p className="gradee_nine">9th</p>
            </div>
            <div
              className={
                selectedGrade === 10
                  ? "gradee__smallCircleSelected gradee__smallCircle10"
                  : "gradee__smallCircle10"
              }
              onClick={() => setSelectedGrade(10)}
            >
              <p className="gradee_ten">10th</p>
            </div>
            <div
              className={
                selectedGrade === 11
                  ? "gradee__smallCircleSelected gradee__smallCircle11"
                  : "gradee__smallCircle11"
              }
              onClick={() => setSelectedGrade(11)}
            >
              <p className="gradee_eleven">11th</p>
            </div>
            {/* <Link to="/subject"> */}
            <button className="gradee__formbtn" onClick={proceed}>
              Proceed
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="gradee__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
    </div>
  );
}