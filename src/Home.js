import React, { Component } from "react";
import "./Home.css";
// import Select from "react-select";
import axios from "axios";
import StepApp from "./assests/logo.png";
import IsolatedSvg from "./assests/Isolated Image Icon.svg";
import one from "./assests/Group.png";
import two from "./assests/two.svg";
import three from "./assests/three.png";
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
          </div>
          <div className="line__container">
            <img src="" alt="" />
          </div>
        </div>

        {/* <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={24.99}
            rating={3}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image={KMix}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={`https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg`}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa Charcol  Fabric"
            price={98.99}
            rating={5}
            image={AmazonEcho}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro {12.9-inch, wi-fi, 128GB} - Silver {4th Generation}"
            price={598.99}
            rating={4}
            image={`https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg`}
          />
        </div>
        <div className="home__row">
          <Product
            id="3254354345"
            title="Samsung LC4983764hJHJ 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x "
            price={598.99}
            rating={4}
            image={`https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg`}
          />
        </div> */}
      </div>
    );
  }
}
