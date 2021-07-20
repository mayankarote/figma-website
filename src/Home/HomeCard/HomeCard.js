import React from "react";
import userPic from "../../assests/User-Pic.png";
import quote from "../../assests/quote.png";
import {
  HomeContainer,
  HomeContentThree,
  HomeItemsfour,
  CardImg,
  CardInfo,
  CardHeading,
  CardTitle,
  WhiteFourCard,
  CardUserPicImg,
  CardsubTitle,
  WhiteFourCardHighlight,
} from "./HomeCardElements";
import HomePart3 from "../HomePart3/HomePart3";

function HomeCard() {
  return (
    <div>
      <HomeContainer>
        <HomeContentThree>
          <HomeItemsfour>
            {/* 1st card */}
            <WhiteFourCard>
              <CardImg src={quote} alt="" />
              <CardInfo>
                <CardTitle>
                  Without a doubt the biggest impact of using ‘Evidence for
                  Learning’ is on staff time and organisation of information.
                  The product’s price in comparison to hours saved represents
                  great value
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
                  Learning’ is on staff time and organisation of information.
                  The product’s price in comparison to hours saved represents
                  great value
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
                  Learning’ is on staff time and organisation of information.
                  The product’s price in comparison to hours saved represents
                  great value
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
                  Learning’ is on staff time and organisation of information.
                  The product’s price in comparison to hours saved represents
                  great value
                </CardTitle>
                <CardUserPicImg src={userPic} alt="" />
                <CardHeading>Arthur Broklyn</CardHeading>
                <CardsubTitle>Grade: 5th</CardsubTitle>
              </CardInfo>
            </WhiteFourCard>
          </HomeItemsfour>
          <HomePart3 />
        </HomeContentThree>
      </HomeContainer>
    </div>
  );
}

export default HomeCard;
