import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import StepApp from "./assests/logo.png";
import IsolatedSvg from "./assests/Isolated Image Icon.svg";
import one from "./assests/Group.png";
import two from "./assests/two.svg";
import three from "./assests/three.png";
import colorLine from "./assests/colorLine.png";
import userPic from "./assests/User-Pic.png";
import a from "./assests/a.png";
import b from "./assests/b.png";
import c from "./assests/c.png";
import d from "./assests/d.png";
import quote from "./assests/quote.png";
import { Select } from "@chakra-ui/react";

export default function Home() {
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
    <div className="Home">
      <div className="home__container">
        {/* home inner container */}
        <div className="Homeinner__container">
          <div>
            <p className="small__msg">
              Students From Class 5th To 11th, Here is Your Dream
              <p>Opporyunity!</p>
            </p>
            <br></br>
            <p className="large__msg">
              Play, Learn & Build Your
              <p>Own Future</p>
            </p>
          </div>
          <img className="home__svg" src={IsolatedSvg} alt="" />
        </div>
        {/* home inner container end */}
        {/* home container 2 */}
        <div className="home__container2">
          <div className="home__form">
            <img className="home__stepApplogo" src={StepApp} alt="" />
            <div>
              <div className="home__text">
                <label>Select School</label>
              </div>
              <div className="home__con">
                <Select
                  size="lg"
                  backgroundColor="white"
                  width="460px"
                  marginLeft="-95px"
                  borderRadius="50px"
                  classNamePrefix="home__dropdown"
                >
                  <option value="Select Name">Select Name</option>
                  {states.map((state) => (
                    <option value={state.value}>{state.first_name}</option>
                  ))}
                </Select>
                <div>
                  <button className="home__formbtn">Fetch Data</button>
                  <p className="error">{errors ? { error } : null}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* home container 2 end */}
        {/* home container 3 */}
        <div className="home__container3">
          <div className="home__features">
            <div className="vector__one">
              <div className="yellow__circle">
                <img src={one} className="icon " alt="" />
              </div>
              <p className="outer__text">Adaptive Learning</p>
              <p className="inner__text">
                Learning is made fun and easy for kids through STEPapp’s
                engaging gamified platform.
              </p>
            </div>
            <div className="vector__two">
              <div className="yellow__circle">
                <img src={two} className="icon " alt="" />
              </div>
              <p className="outer__text">Mapped to school Curriculum</p>
              <p className="inner__text">
                STEPapp Concepts is mapped to the curriculum of school boards
                (CBSE, ICSE).
              </p>
            </div>
            <div className="vector__three">
              <div className="yellow__circle">
                <img src={three} className="icon " alt="" />
              </div>
              <p className="outer__text">Rewards & Scholarships</p>
              <p className="inner__text">
                STEPapp Scholarships will award 10,000 students of EACH grade
                (5th - 11th)
              </p>
            </div>
          </div>
          <div className="color__line">
            <img src={colorLine} alt="" />
          </div>
          {/* <div className="home__innerCon"> */}
          <div className="whatstudentssay_OuterText">
            <p>What Students Say</p>
          </div>
          <div className="whatstudentssay_InnerText">
            <span>
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &
              Media Specialist,.
            </span>
          </div>
          <div className="cardOne">
            <div className="rectangle">
              <img src={quote} alt="" className="quote" />
              <p className="text__rectangle">
                Without a doubt the biggest impact of using ‘Evidence for
                Learning’ is on staff time and organisation of information. The
                product’s price in comparison to hours saved represents great
                value
              </p>
              <div className="mask">
                <img src={userPic} alt="" />
              </div>

              <p className="aurthor__name">Arthur Broklyn</p>
              <p className="grade">Grade: 5th</p>
            </div>
          </div>
          <div className="cardTwo">
            <div className="cardTwo_rectangle">
              <img src={quote} alt="" className="quote" />
              <p className="text__rectangle">
                Without a doubt the biggest impact of using ‘Evidence for
                Learning’ is on staff time and organisation of information. The
                product’s price in comparison to hours saved represents great
                value
              </p>
              <div className="mask">
                <img src={userPic} alt="" />
              </div>
              <p className="aurthor__name">Arthur Broklyn</p>
              <p className="grade">Grade: 5th</p>
            </div>
          </div>
          <div className="cardThree">
            <div className="rectangle">
              <img src={quote} alt="" className="quote" />
              <p className="text__rectangle">
                Without a doubt the biggest impact of using ‘Evidence for
                Learning’ is on staff time and organisation of information. The
                product’s price in comparison to hours saved represents great
                value
              </p>
              <div className="mask">
                <img src={userPic} alt="" />
              </div>

              <p className="aurthor__name">Arthur Broklyn</p>
              <p className="grade">Grade: 5th</p>
            </div>
          </div>
          <div className="cardFour">
            <div className="rectangle">
              <img src={quote} alt="" className="quote" />
              <p className="text__rectangle">
                Without a doubt the biggest impact of using ‘Evidence for
                Learning’ is on staff time and organisation of information. The
                product’s price in comparison to hours saved represents great
                value
              </p>
              <div className="mask">
                <img src={userPic} alt="" />
              </div>

              <p className="aurthor__name">Arthur Broklyn</p>
              <p className="grade">Grade: 5th</p>
            </div>
          </div>
        </div>
        {/* home container 3 end */}
        <div className="home__container4">
          <div className="container4__rectangle">
            <div className="group__A">
              <img src={d} alt="" className="a_img" />
              <img src={c} alt="" className="b_img" />
              <img src={b} alt="" className="c_img" />
              <img src={a} alt="" className="d_img" />
            </div>

            <div className="groupLetter">
              <div className="groupLetterD">
                <p className="groupLetterText">5,679</p>
                <p className="groupLetterNum">Registered Students</p>
              </div>
              <div className="groupLetterC">
                <p className="groupLetterText">2,679</p>
                <p className="groupLetterNum">
                  Student has been helped to achieve their dreams
                </p>
              </div>
              <div className="groupLetterB">
                <p className="groupLetterText">10,000</p>
                <p className="groupLetterNum">
                  More than 10,000 people visits our site monthly
                </p>
              </div>
              <div className="groupLetterA">
                <p className="groupLetterText">$10</p>
                <p className="groupLetterNum">
                  Ranked among the top 10 growing online learning startups in
                  West Africa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home__container5">
          <p className="last__Text">All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>

      {/* home container end  */}
    </div>
  );
}
