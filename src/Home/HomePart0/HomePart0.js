import React from "react";
import "../Home.css";
import colorLine from "../../assests/colorLine.png";

import {
  HomeContentThree,
  HomeItemsThree,
  ProductInfo,
  HomeLine,
  WhatStdsSayHeading,
  Card,
  WhatStdsSayTitle,
} from "./HomePart0Elements";

export default function HomePart1() {
  return (
    <HomeContentThree>
      <HomeItemsThree>
        <HomeLine src={colorLine} alt="" />
        <Card>
          <ProductInfo>
            <WhatStdsSayHeading>What Students Say</WhatStdsSayHeading>
            <WhatStdsSayTitle>
              Semaj Africa is an online education platform that delivers video
              courses, programs and resources for Individual, Advertising &
              Media Specialist,.
            </WhatStdsSayTitle>
          </ProductInfo>
        </Card>
      </HomeItemsThree>
    </HomeContentThree>
  );
}
