import React from "react";
import "../Home.css";
import userPic from "../../assests/User-Pic.png";
import quote from "../../assests/quote.png";
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
  CardUserPicImg,
  CardsubTitle,
  WhiteFourCardHighlight,
} from "./HomePart2Elements";

export default function HomePart2() {
  return (
    <HomeContentFour>
      <HomeItemsfour>
        {/* 1st card */}
        <WhiteFourCard>
          <CardImg src={quote} alt="" />
          <CardInfo>
            <CardTitle>
              Without a doubt the biggest impact of using ‘Evidence for
              Learning’ is on staff time and organisation of information. The
              product’s price in comparison to hours saved represents great
              value
            </CardTitle>
            <CardUserPicImg src={userPic} alt="" />
            <CardHeading>Arthur Broklyn</CardHeading>
            <CardsubTitle>Grade: 5th</CardsubTitle>
          </CardInfo>
        </WhiteFourCard>

        {/* 2nd card */}
        <WhiteFourCardHighlight>
          <CardImg src={quote} alt="" />
          <CardInfo>
            <CardTitle>
              Without a doubt the biggest impact of using ‘Evidence for
              Learning’ is on staff time and organisation of information. The
              product’s price in comparison to hours saved represents great
              value
            </CardTitle>
            <CardUserPicImg src={userPic} alt="" />
            <CardHeading>Arthur Broklyn</CardHeading>
            <CardsubTitle>Grade: 5th</CardsubTitle>
          </CardInfo>
        </WhiteFourCardHighlight>

        {/* 3rd card */}
        <WhiteFourCard>
          <CardImg src={quote} alt="" />
          <CardInfo>
            <CardTitle>
              Without a doubt the biggest impact of using ‘Evidence for
              Learning’ is on staff time and organisation of information. The
              product’s price in comparison to hours saved represents great
              value
            </CardTitle>
            <CardUserPicImg src={userPic} alt="" />
            <CardHeading>Arthur Broklyn</CardHeading>
            <CardsubTitle>Grade: 5th</CardsubTitle>
          </CardInfo>
        </WhiteFourCard>

        {/* 4th card */}
        <WhiteFourCard>
          <CardImg src={quote} alt="" />
          <CardInfo>
            <CardTitle>
              Without a doubt the biggest impact of using ‘Evidence for
              Learning’ is on staff time and organisation of information. The
              product’s price in comparison to hours saved represents great
              value
            </CardTitle>
            <CardUserPicImg src={userPic} alt="" />
            <CardHeading>Arthur Broklyn</CardHeading>
            <CardsubTitle>Grade: 5th</CardsubTitle>
          </CardInfo>
        </WhiteFourCard>
      </HomeItemsfour>
    </HomeContentFour>
  );
}
