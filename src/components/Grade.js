import React, { useState, useEffect } from "react";
import "./Grade.css";
import axios from "axios";
import bigCircle from "../assests/bigCircle.png";
import selectGrade from "../assests/selectGrade.png";
import Ellipse5th from "../assests/Ellipse5th.png";
import Ellipse6th from "../assests/Ellipse6th.png";
import Ellipse7th from "../assests/Ellipse7th.png";
import Ellipse8th from "../assests/Ellipse8th.png";
import Ellipse9th from "../assests/Ellipse9th.png";
import Ellipse10th from "../assests/Ellipse10th.png";
import Ellipse11th from "../assests/Ellipse11th.png";
import ten from "../assests/10th.png";
import eleven from "../assests/11th.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [states, setState] = useState([]);
  const [errors, setError] = useState();
  useEffect(
    () => {
      axios
        .get(`https://reqres.in/api/users?page=2`)
        .then((response) => {
          setState(response.data.data);
        })
        .then((err) => setError(err));
    },
    [states],
    [errors]
  );

  const error = () => {
    return (
      <div className=" error alert alert-danger " role="alert">
        Error: There is no data
      </div>
    );
  };

  return (
    <div className="login">
      <div className="login__container">
        {/* login container 2 */}
        <div className="login__container1">
          <div className="grade__group">
            <div className="grade__bigCircle">
              <img src={bigCircle} alt="" />
              <img src={selectGrade} alt="" className="grade__select" />
            </div>
            <div className="grade__smallCircle5">
              <img src={Ellipse5th} alt="" />
              <p className="grade_five">5th</p>
            </div>
            <div className="grade__smallCircle6">
              <img src={Ellipse6th} alt="" />
              <p className="grade_six">6th</p>
            </div>
            <div className="grade__smallCircle7">
              <img src={Ellipse7th} alt="" />
              <p className="grade_seven">7th</p>
            </div>
            <div className="grade__smallCircle8">
              <img src={Ellipse8th} alt="" />
              <p className="grade_eight">8th</p>
            </div>
            <div className="grade__smallCircle9">
              <img src={Ellipse9th} alt="" />
              <p className="grade_nine">9th</p>
            </div>
            <div className="grade__smallCircle10">
              <img src={Ellipse10th} alt="" />
              <img src={ten} alt="" className="grade_ten" />
            </div>
            <div className="grade__smallCircle11">
              <img src={Ellipse11th} alt="" />
              <img src={eleven} alt="" className="grade_eleven" />
            </div>
            <button className="grade__formbtn">Proceed</button>
          </div>
        </div>
        {/* login container 2 end */}
        <div className="login__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* login container end  */}
    </div>
  );
}
