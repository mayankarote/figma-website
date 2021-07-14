import React from "react";
import Form from "../Form/Form";
import { LoginContainer, LoginItems } from "./LoginElements";

export default function Login() {
  return (
    <LoginContainer>
      <LoginItems>
        <div className="login__form">
          <Form />
        </div>
      </LoginItems>
      {/* <div className="login__container2">
        <p>All Right Reserved | STEPAPP 2021</p>
      </div> */}
    </LoginContainer>
  );
}
