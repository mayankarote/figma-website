import React from "react";
import "../Home.css";
import a from "../../assests/a.png";
import b from "../../assests/b.png";
import c from "../../assests/c.png";
import d from "../../assests/d.png";
import {
  HomeContentFour,
  HomeItemsfour,
  CardImg,
  CardInfo,
  CardHeading,
  CardTitle,
  WhiteFourCard,
} from "./HomePart3Elements";

export default function HomePart2() {
  return (
    <HomeContentFour>
      <HomeItemsfour>
        <CardInfo>
          <CardImg src={d} alt="" />
          <CardHeading>5,679</CardHeading>
          <CardTitle>Registered Students</CardTitle>
        </CardInfo>

        <CardInfo>
          <CardImg src={c} alt="" />
          <CardHeading>2,679</CardHeading>
          <CardTitle>Student has been helped to achieve their dreams</CardTitle>
        </CardInfo>

        <CardInfo>
          <CardImg src={b} alt="" />
          <CardHeading>10,000</CardHeading>
          <CardTitle>More than 10,000 people visits our site monthly</CardTitle>
        </CardInfo>

        <CardInfo>
          <CardImg src={a} alt="" />
          <CardHeading>$10</CardHeading>
          <CardTitle>
            Ranked among the top 10 growing online learning startups in West
            Africa
          </CardTitle>
        </CardInfo>
      </HomeItemsfour>
    </HomeContentFour>
  );
}
