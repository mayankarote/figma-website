import React from "react";
import userPic from "../../assests/User-Pic.png";
import quote from "../../assests/quote.png";
import a from "../../assests/a.png";
import b from "../../assests/b.png";
import c from "../../assests/c.png";
import d from "../../assests/d.png";

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

import {
  HomeYellowContentFour,
  HomeYellowItemsfour,
  YellowCardImg,
  YellowCardInfo,
  YellowCardHeading,
  YellowCardTitle,
} from "./HomeCardElements";
import Footer from "../../components/Footer";

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
          {/* -------------------------------------------------------- */}

          <HomeYellowContentFour>
            <HomeYellowItemsfour>
              <YellowCardInfo>
                <YellowCardImg src={d} alt="" />
                <YellowCardHeading>5,679</YellowCardHeading>
                <YellowCardTitle>Registered Students</YellowCardTitle>
              </YellowCardInfo>

              <YellowCardInfo>
                <YellowCardImg src={c} alt="" />
                <YellowCardHeading>2,679</YellowCardHeading>
                <YellowCardTitle>
                  Student has been helped to achieve their dreams
                </YellowCardTitle>
              </YellowCardInfo>

              <YellowCardInfo>
                <YellowCardImg src={b} alt="" />
                <YellowCardHeading>10,000</YellowCardHeading>
                <YellowCardTitle>
                  More than 10,000 people visits our site monthly
                </YellowCardTitle>
              </YellowCardInfo>

              <YellowCardInfo>
                <YellowCardImg src={a} alt="" />
                <YellowCardHeading>$10</YellowCardHeading>
                <YellowCardTitle>
                  Ranked among the top 10 growing online learning startups in
                  West Africa
                </YellowCardTitle>
              </YellowCardInfo>
            </HomeYellowItemsfour>
            <Footer />
          </HomeYellowContentFour>
        </HomeContentThree>
      </HomeContainer>
    </div>
  );
}

export default HomeCard;
