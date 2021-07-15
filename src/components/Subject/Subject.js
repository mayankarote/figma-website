import React from "react";
import "./Subject.css";
import { useHistory } from "react-router-dom";
import star from "../../assests/star.png";
import image from "../../assests/image.png";
import {
  ChapBtn,
  ModelGroup,
  ModelGroupTwo,
  ModelOne,
  ModelTwo,
  SubjectContainer,
  SubjectContent,
  SubjectGroup,
  SubjectIcon,
  SubjectItems,
  SubjectStar,
  SubjModelP,
  SubjModelP2,
  SubjModelP3,
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
              <SubjModelP>Learn Science</SubjModelP>
              <SubjModelP2>
                <p>Light </p>Magnetism <p>+6 more Chapters</p>
              </SubjModelP2>
              <SubjModelP3>8 Chapters</SubjModelP3>
              <ChapBtn onClick={onClickScience}>
                <SubjectStar src={star} alt="" />1 Free Demo
              </ChapBtn>
            </ModelGroup>

            <ModelGroupTwo>
              <SubjModelP>Learn Math</SubjModelP>
              <SubjModelP2>
                <p>Playing with Numbers </p>Number System,{" "}
                <p>+7 more chapters</p>
              </SubjModelP2>
              <SubjModelP3>9 Chapters</SubjModelP3>
              <ChapBtn onClick={alertMsg}>
                <SubjectStar src={star} alt="" />1 Free Demo
              </ChapBtn>
            </ModelGroupTwo>
          </SubjectGroup>
        </SubjectItems>
      </SubjectContent>
      <Footer />
    </SubjectContainer>
  );
}
