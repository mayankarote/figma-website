import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import StepApp from "./../assests/logo.png";
import IsolatedSvg from "./../assests/Isolated Image Icon.svg";
import { Select } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import config from "../config.json";
import {
  HomeContainer,
  HomeContentOne,
  HomeContentTwo,
  HomeItems,
  HomeItemsTwo,
  HomeP,
  HomeP2,
  SVGIcon,
  StepAppLogo,
  NavIcon,
  HomeH1,
  HomeBtn,
  HomeSelect,
} from "./HomeElements";
import Header from "../Header/Header";
import Footer from "../components/Footer";
import HomePart from "./HomePart/HomePart";
import HomePart0 from "./HomePart0/HomePart0";
import HomePart1 from "./HomePart1/HomePart1";
import HomePart2 from "./HomePart2/HomePart2";
import HomePart3 from "./HomePart3/HomePart3";

export default function Home() {
  let history = useHistory();
  const [states, setState] = useState([]);
  const [statesDropdown, setStatesDropdown] = useState([]);
  const [error, setError] = useState();

  useEffect(
    () => {
      axios
        .get(config.schoolapi)
        .then((response) => {
          setState(response.data.data);
        })
        .catch((error) => {
          setError(alert("No data available, please try later"));
        });
    },
    [],
    [error]
  );

  const fetchDropdownValue = (e) => {
    setStatesDropdown({ selectValue: e.target.value });
  };

  const proceed = () => {
    if (!statesDropdown.selectValue) {
      alert("Please select the Name");
    } else {
      localStorage.setItem("selectValue", statesDropdown.selectValue);

      history.push({
        pathname: "/login",
        selectValue: statesDropdown.selectValue,
      });

      const selectValue = localStorage.getItem("selectValue") === "true";
      setState({ selectValue });
    }
  };
  return (
    <HomeContainer>
      <Header />
      <HomeContentOne>
        <HomeItems>
          <HomeP>
            <p>
              Students From Class 5th To 11th, Here is Your Dream Opportunity!
            </p>
          </HomeP>
          <HomeP2>
            <p>Play, Learn & Build Your Own Future</p>
          </HomeP2>
        </HomeItems>
        <NavIcon>
          <SVGIcon src={IsolatedSvg} alt="" />
        </NavIcon>
      </HomeContentOne>

      <HomePart />
      <HomePart1 />
      <HomePart0 />
      <HomePart2 />
      <HomePart3 />
      {/* <div className="home__container5">
        <p>All Right Reserved | STEPAPP 2021</p>
      </div> */}

      {/* home container end  */}
    </HomeContainer>
  );
}
