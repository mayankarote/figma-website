import React, { useState, useEffect } from "react";
import IsolatedSvg from "./../assests/Isolated Image Icon.svg";
import axios from "axios";
import config from "./../config.json";

import {
  HomeContainer,
  HomeContentOne,
  HomeItems,
  HomeP,
  HomeP2,
  SVGIcon,
  NavIcon,
} from "./HomeElements";
import Header from "../Header/Header";
import HomePart1 from "./HomePart1/HomePart1";
import HomePart from "./HomePart/HomePart";
import HomePart3 from "./HomePart3/HomePart3";
import HomeCard from "./HomeCard/HomeCard";

export default function Home() {
  const [states, setState] = useState([]);
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

  return (
    <>
      <HomeContainer>
        <Header />
        <HomeContentOne>
          <HomeItems>
            <HomeP>
              Students From Class 5th To 11th, Here is Your Dream Opportunity!
            </HomeP>
            <HomeP2>Play, Learn & Build Your Own Future</HomeP2>
            <NavIcon>
              <SVGIcon src={IsolatedSvg} alt="" />
            </NavIcon>
          </HomeItems>
        </HomeContentOne>

        <HomePart />
        <HomePart1 />
        {/* <HomeCard /> */}
        {/* <HomePart3 /> */}
      </HomeContainer>
    </>
  );
}
