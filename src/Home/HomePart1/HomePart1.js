import React from "react";
import one from "../../assests/Group.png";
import two from "../../assests/two.svg";
import three from "../../assests/three.png";
import colorLine from "../../assests/colorLine.png";

import {
  HomeContainerThree,
  HomeContentThree,
  HomeItemsThree,
  ProductImg,
  HomeYellowCircle,
  ProductsHeading,
  ProductInfo,
  ProductCard,
  ProductTitle,
  Info,
  HomeLine,
  WhatStdsSayHeading,
  HomeLineDiv,
  WhatStdsSayTitle,
} from "./HomePart1Elements";
import HomeCard from "../HomeCard/HomeCard";
import HomePart3 from "../HomePart3/HomePart3";

export default function HomePart1() {
  return (
    <HomeContainerThree>
      <HomeContentThree>
        <HomeItemsThree>
          {/* first vector */}
          <ProductCard>
            <HomeYellowCircle>
              <ProductImg src={one} alt="" />
            </HomeYellowCircle>
            <ProductInfo>
              <ProductsHeading>Adaptive Learning</ProductsHeading>
              <ProductTitle>
                Learning is made fun and easy for kids through STEPapp’s
                engaging gamified platform.
              </ProductTitle>
            </ProductInfo>
          </ProductCard>
          {/* second vector */}
          <ProductCard>
            <HomeYellowCircle>
              <ProductImg src={two} alt="" />
            </HomeYellowCircle>
            <ProductInfo>
              <ProductsHeading>Mapped to school Curriculum</ProductsHeading>
              <ProductTitle>
                STEPapp Concepts is mapped to the curriculum of school boards
                (CBSE, ICSE).
              </ProductTitle>
            </ProductInfo>
          </ProductCard>
          {/* third vector */}
          <ProductCard>
            <HomeYellowCircle>
              <ProductImg src={three} alt="" />
            </HomeYellowCircle>
            <ProductInfo>
              <ProductsHeading>Rewards & Scholarships</ProductsHeading>
              <ProductTitle>
                STEPapp Scholarships will award 10,000 students of EACH grade
                (5th - 11th)
              </ProductTitle>
            </ProductInfo>
          </ProductCard>
          {/* ----------------------------------------------------- */}
          <HomeLineDiv>
            <HomeLine src={colorLine} alt="" />
          </HomeLineDiv>
          <Info>
            <WhatStdsSayHeading>What Students Say</WhatStdsSayHeading>
            <WhatStdsSayTitle>
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &
              Media Specialist,.
            </WhatStdsSayTitle>
          </Info>
        </HomeItemsThree>
        {/* ---------------------------------------- */}
        <HomeCard />
      </HomeContentThree>
    </HomeContainerThree>
  );
}
