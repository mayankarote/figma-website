import React from "react";
import IsolatedSvg from "./../assests/Isolated Image Icon.svg";
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
import HomePart from "./HomePart/HomePart";
import HomePartColorLine from "./HomePartColorLine/HomePart0";
import HomePart1 from "./HomePart1/HomePart1";
import HomePart2 from "./HomePart2/HomePart2";
import HomePart3 from "./HomePart3/HomePart3";

export default function Home() {
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
      <HomePartColorLine />
      <HomePart2 />
      <HomePart3 />
    </HomeContainer>
  );
}
