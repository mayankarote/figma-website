import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import StepApp from "./assests/logo.png";
import IsolatedSvg from "./assests/Isolated Image Icon.svg";
import one from "./assests/Group.png";
import two from "./assests/two.svg";
import three from "./assests/three.png";
import colorLine from "./assests/colorLine.png";
import userPic from "./assests/User-Pic.png";
import quote from "./assests/quote.png";
import { Select } from "@chakra-ui/react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
    };
  }
  async getOptions() {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    const data = res.data.data;
    const options = data.map((d) => ({
      value: d.id,
      label: d.first_name,
    }));
    this.setState({ selectOptions: options });
    console.log(res);
  }

  handleChange(e) {
    this.setState({ id: e.value, first_name: e.label });
  }
  componentDidMount() {
    this.getOptions();
  }

  render() {
    return (
      <div className="Home">
        <div className="home__container">
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
                    {this.state.selectOptions.map((item) => (
                      <option value={item.value}>{item.label}</option>
                    ))}
                  </Select>
                  <div>
                    <button className="home__formbtn">Fetch Data</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="home__innerCon">
              <div className="whatstudentssay_OuterText">
                <p>What Students Say</p>
              </div>
              <div className="whatstudentssay_InnerText">
                <span>
                  Semaj Africa is an online education platform that delivers
                  video courses, programs and resources for Individual,
                  Advertising & Media Specialist,.
                </span>
              </div>
            </div>
            <div className="home__Grouprow">
              <div className="cardOne">
                <div className="rectangle">
                  <div className="quote">
                    <img src={quote} alt="" />
                  </div>
                  <div className="text__rectangle">
                    <p>
                      Without a doubt the biggest impact of using ‘Evidence for
                      Learning’ is on staff time and organisation of
                      information. The product’s price in comparison to hours
                      saved represents great value
                    </p>
                  </div>
                  <div className="mask">
                    <img src={userPic} alt="" />
                  </div>
                  <div className="aurthor__name">
                    <p>Arthur Broklyn</p>
                  </div>
                  <div className="grade">
                    <p>Grade: 5th</p>
                  </div>
                </div>
              </div>
              <div className="cardTwo"></div>
              <div className="cardThree"></div>
              <div className="cardFour"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
