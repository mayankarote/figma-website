import React from "react";
import "../Home.css";
import one from "../../assests/Group.png";
import two from "../../assests/two.svg";
import three from "../../assests/three.png";

import {
  HomeContentThree,
  HomeItemsThree,
  ProductImg,
  HomeYellowCircle,
  ProductsHeading,
  ProductInfo,
  ProductCard,
  ProductTitle,
} from "./HomePart1Elements";

export default function HomePart1() {
  return (
    <HomeContentThree>
      <HomeItemsThree>
        {/* second vector */}
        <ProductCard>
          <HomeYellowCircle>
            <ProductImg src={one} alt="" />
          </HomeYellowCircle>
          <ProductInfo>
            <ProductsHeading>Adaptive Learning</ProductsHeading>
            <ProductTitle>
              Learning is made fun and easy for kids through STEPapp’s engaging
              gamified platform.
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
              STEPapp Scholarships will award 10,000 students of EACH grade (5th
              - 11th)
            </ProductTitle>
          </ProductInfo>
        </ProductCard>
      </HomeItemsThree>
    </HomeContentThree>
  );
}
