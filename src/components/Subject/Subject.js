import React from "react";
import "./Subject.css";
import { useHistory } from "react-router-dom";
import star from "../../assests/star.png";
import image from "../../assests/image.png";
import {
  ChapBtn,
  ModelGroup,
  ModelOne,
  ModelTwo,
  SubjectContainer,
  SubjectContent,
  SubjectGroup,
  SubjectIcon,
  SubjectItems,
  SubjectStar,
  SubjP,
  SubjP2,
  SubjP3,
  YellowCirlce,
} from "./SubjectElements";
import Footer from "../Footer";
import { Carousel } from "react-bootstrap";

export default function Subject() {
  let history = useHistory();

  const alertMsg = () => {
    console.log("yes you Clicked");
    alert("No Data Available");
  };
  const onClickScience = () => {
    history.push({
      pathname: "/chapters",
    });
  };

  return (
    <SubjectContainer>
      <SubjectContent>
        <SubjectItems>
          <Carousel>
            <Carousel.Item>
              <ModelOne>
                <YellowCirlce />
                <SubjectIcon src={image} alt="" />
                <SubjP>Free Demo</SubjP>
                <SubjP2>
                  Play the FREE demo chapters to understand how your speed and
                  accuracy will make you win
                </SubjP2>
              </ModelOne>
            </Carousel.Item>

            <Carousel.Item>
              <ModelOne>
                <YellowCirlce />
                <SubjectIcon src={image} alt="" />
                <SubjP>Free Demo</SubjP>
                <SubjP2>
                  Play the FREE demo chapters to understand how your speed and
                  accuracy will make you win
                </SubjP2>
              </ModelOne>
            </Carousel.Item>

            <Carousel.Item>
              <ModelTwo>
                <YellowCirlce />
                <SubjectIcon src={image} alt="" />
                <SubjP>Free Demo</SubjP>
                <SubjP2>
                  Play the FREE demo chapters to understand how your speed and
                  accuracy will make you win
                </SubjP2>
              </ModelTwo>
            </Carousel.Item>
          </Carousel>

          <SubjectGroup>
            <ModelGroup>
              <SubjP>Learn Science</SubjP>
              <SubjP2>
                <p>Light </p>Magnetism <p>+6 more Chapters</p>
              </SubjP2>
              <SubjP3>8 Chapters</SubjP3>
              <ChapBtn onClick={onClickScience}>
                <SubjectStar src={star} alt="" />
                Free Demo
              </ChapBtn>
            </ModelGroup>

            {/* <div className="grade__box2">
              <p className="learn__math">Learn Math</p>
              <p className="info__text1">
                Playing with Numbers
                <p>Number System,</p>
                +7 more chapters
              </p>
              <p className="__chapters1">9 Chapters</p>
              <button className="free__demo1 free_demotext" onClick={alertMsg}>
                Free Demo
              </button>
              <img src={star} alt="" className="star1" />
            </div> */}
          </SubjectGroup>
        </SubjectItems>
      </SubjectContent>
      <Footer />
    </SubjectContainer>
  );
}
