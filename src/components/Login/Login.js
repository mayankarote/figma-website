import React from "react";
import Form from "../Form/Form";
import StepApp from "../../assests/logo.png";
import {
  LoginContainer,
  LoginItems,
  StepAppLogo,
  HomeH1,
} from "./LoginElements";
import Footer from "../Footer";

export default function Login() {
  return (
    <LoginContainer>
      <LoginItems>
        <StepAppLogo src={StepApp} alt="" />
        <HomeH1>Sign in to your account to continue</HomeH1>
        <Form />
      </LoginItems>
      <Footer />
    </LoginContainer>
  );
}
