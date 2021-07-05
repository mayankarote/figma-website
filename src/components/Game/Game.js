import React from "react";
import "./Game.css";
import cloudOne from "../../assests/cloud_one.png";
import cloudTwo from "../../assests/cloud_two.png";
import cloudThree from "../../assests/cloud_three.png";
import lock from "../../assests/lock.png";
import blackPlay from "../../assests/blackPlay.png";
import sun from "../../assests/sun.png";
import smallCloud from "../../assests/smallCloud.png";
import miniCloud from "../../assests/miniCloud.png";
import square from "../../assests/square.png";
import colorSquare from "../../assests/colorSquare.png";
import trees from "../../assests/trees.png";
import Greenline from "../../assests/Greenline.png";
import bunchTrees from "../../assests/bunchTrees.png";
import fourWhiteSteps from "../../assests/fourWhiteSteps.png";
import fourWhiteStepsShadow from "../../assests/fourWhiteStepsShadow.png";
import fourYellowSteps from "../../assests/fourYellowSteps.png";
import manLight from "../../assests/manLight.png";
import yellowLine from "../../assests/yellowLine.png";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();
  const onClick = () => {
    history.push({
      pathname: "/chapintro",
    });
  };

  return (
    <div className="game">
      <div className="game__container">
        <div className="game__container1">
          <div className="cloud__three">
            <img src={cloudThree} alt="" />
          </div>
          <div className="cloud__two">
            <img src={cloudTwo} alt="" />
          </div>
          <div className="cloud__one">
            <img src={cloudOne} alt="" />
          </div>
          <div className="score">Score</div>
          <div className="score__Rectangle"></div>
          <div className="score__circleOne"></div>
          <div className="score__textOne">0</div>
          <div className="score__circleTwo"></div>
          <div className="score__textTwo">1</div>
          <div className="score__circleThree"></div>
          <div className="score__textThree">1</div>

          <div className="">
            <img src={miniCloud} alt="" className="mini__cloud" />
            <img src={sun} alt="" className="sun" />
            <img src={smallCloud} alt="" className="small__cloud" />
          </div>

          <div className="pinhole__setup">
            <div className="pinhole__camera"></div>
            <div className="pinhole__cameraText">Pinhole camera</div>
            <div className="pinhole__cameraCirlce"></div>
            <img src={lock} alt="" className="pinhole__cameraLock" />
          </div>
          <div className="square__stepsSetup">
            <img src={square} alt="" className="square" />
            <img src={trees} alt="" className="trees" />
            <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow"
            />
            <img src={fourWhiteSteps} alt="" className="fourWhite__steps" />
            <img src={smallCloud} alt="" className="small__cloud1" />
            <div className="pinhole__setup2">
              <div className="pinhole__camera2"></div>
              <div className="pinhole__cameraText2">Eclipses</div>
              <div className="pinhole__cameraCirlce2"></div>
              <img src={lock} alt="" className="pinhole__cameraLock2" />
            </div>
          </div>
          <div className="square__stepsSetup2">
            <img src={square} alt="" className="square2" />
            <img src={trees} alt="" className="trees2" />
            <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow2"
            />
            <img src={fourWhiteSteps} alt="" className="fourWhite__steps2" />
            <img src={smallCloud} alt="" className="small__cloud2" />
            <div className="pinhole__setup3">
              <div className="pinhole__camera3"></div>
              <div className="pinhole__cameraText3">Types of Beam</div>
              <div className="pinhole__cameraCirlce3"></div>
              <img src={lock} alt="" className="pinhole__cameraLock3" />
            </div>
          </div>
          <div className="square__stepsSetup3">
            <img src={square} alt="" className="square3" />
            <img src={trees} alt="" className="trees3" />
            <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow3"
            />
            <img src={fourYellowSteps} alt="" className="fourWhite__steps3" />
            <img src={smallCloud} alt="" className="small__cloud3" />
          </div>
          <div className="square__stepsSetup4">
            <img src={colorSquare} alt="" className="square4" />
            <img src={bunchTrees} alt="" className="trees4" />
            <img src={Greenline} alt="" className="Greenline" />
            <img
              src={fourWhiteStepsShadow}
              alt=""
              className="fourWhite__stepsShadow4"
            />
            <img src={fourYellowSteps} alt="" className="fourWhite__steps4" />
            <div className="pinhole__setup4">
              <div className="pinhole__camera4"></div>
              <div className="pinhole__cameraText4">
                Transparent, Translucent & Opaque materials
              </div>
              <div className="pinhole__cameraCirlce4"></div>
              <img src={lock} alt="" className="pinhole__cameraLock4" />
            </div>
          </div>
          <div className="square__stepsSetup5">
            <img src={colorSquare} alt="" className="square5" />
            <img src={manLight} alt="" className="manLight" />
            <button className="pinhole__setup5" onClick={onClick}>
              <div className="pinhole__camera5"></div>
              <div className="pinhole__cameraText5">Introduction to Light</div>
              <div className="pinhole__cameraCirlce5"></div>
              <img src={blackPlay} alt="" className="pinhole__cameraPlay5" />
              <img src={yellowLine} alt="" className="pinhole__yellowLine" />
            </button>
          </div>
        </div>
        <div className="game__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
    </div>
  );
}
