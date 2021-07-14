import React, { useState, useEffect } from "react";
import "./Form.css";
import { Link, useHistory } from "react-router-dom";
import {
  FormError,
  FormInput,
  FormLink,
  FormP,
  HomeH1,
  LoginBtn,
  LoginForm,
} from "./FormElements";

function Form() {
  let history = useHistory();
  const [mobileNo, setMobileno] = useState("");
  const [password, setPassword] = useState({ value: "", isValid: false });

  const validatePassword = (e) => {
    let pass = e.target.value;
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$_!%*?&])[A-Za-z\d@$!_%*?&]{8,}$/;
    if (passwordRegex.test(pass)) {
      setPassword({ value: pass, isValid: true });
    } else {
      setPassword({ value: pass, isValid: false });
    }
  };

  const validationMobileno = (e) => {
    let mob = e.target.value;
    var pattern = /^[0-9\b]+$/;
    if (pattern.test(mob)) {
      setMobileno(mob);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.isValid) {
      localStorage.setItem(
        "user",
        JSON.stringify({ mobileNo: mobileNo, password: password.value })
      );
      history.push({
        pathname: "/subject",
      });
      alert("Login Succefully!");
    } else {
      alert("Please enter valid Password!");
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);

    if (userData) {
      setMobileno(userData.mobileNo);
      setPassword({ value: userData.password, isValid: true });
    } else {
      setMobileno("");
      setPassword({ value: "", isValid: false });
    }
  }, []);

  return (
    <LoginForm>
      <HomeH1>Sign in to your account to continue</HomeH1>
      <form onSubmit={onSubmit}>
        <FormInput>
          <input
            type="text"
            placeholder="Mobile No"
            value={mobileNo}
            onChange={validationMobileno}
            minLength={10}
            maxLength={10}
            required
            style={{ outline: "none" }}
          />
        </FormInput>
        <FormInput>
          <input
            type="password"
            value={password.value}
            onChange={validatePassword}
            required
            style={{ outline: "none" }}
          />
          <FormError>
            {!password.value
              ? ""
              : password.isValid
              ? "Valid Password"
              : "Invalid Password"}
          </FormError>
        </FormInput>

        <FormP>
          Don’t have an account?
          <Link style={{ color: "#ffc000", padding: 5 }}>
            <>Sign Up</>
          </Link>
        </FormP>

        <LoginBtn type="submit">Proceed</LoginBtn>
      </form>
    </LoginForm>
  );
}

export default Form;
