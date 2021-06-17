import React, { useState, useEffect } from "react";
import "./Subject.css";
import axios from "axios";
import Modal from "../assests/Modal.png";
import { Link } from "react-router-dom";
import star from "../assests/star.png";
import freeDemo from "../assests/freeDemo.png";

export default function Subject() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClick = () => {
    alert("No data available");
  };

  return (
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1">
          <div className="grade__group">
            <img src={Modal} alt="" className="subject__modal" />
            <div className="grade__group2">
              <Link to="./chapters">
                <div className="grade__box1">
                  <p className="learn__science">Learn Science</p>
                  <p className="inner__text">
                    Light Magnetism +6 more Chapters
                  </p>
                  <p className="__chapters">8 Chapters</p>
                  <img src={freeDemo} alt="" className="free__demo" />
                  <img src={star} alt="" className="star" />
                  <p className="text">Free Demo</p>
                </div>
              </Link>
              <div className="grade__box2" onClick={onClick}>
                <p className="learn__math">Learn Math</p>
                <p className="inner__text1">
                  Playing with Numbers
                  <p>Number System,</p>
                  +7 more chapters
                </p>
                <p className="__chapters1">9 Chapters</p>
                <img src={freeDemo} alt="" className="free__demo1" />
                <img src={star} alt="" className="star1" />
                <p className="text">Free Demo</p>
              </div>
            </div>
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
