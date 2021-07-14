import React from "react";
import Form from "../Form/Form";
import StepApp from "../../assests/logo.png";
import { LoginContainer, LoginItems, StepAppLogo } from "./LoginElements";
import Footer from "../Footer";

export default function Login() {
  return (
    <LoginContainer>
      <LoginItems>
        <StepAppLogo src={StepApp} alt="" />
        <Form />
      </LoginItems>
      <Footer />
      {/* <div className="login__container2">
        <p>All Right Reserved | STEPAPP 2021</p>
      </div> */}
    </LoginContainer>
  );
}
