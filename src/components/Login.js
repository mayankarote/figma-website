import React, { component, useState, useEffect } from "react";
import "./Login.css";
import StepApp from "../assests/logo.png";
import { Link, useLocation } from "react-router-dom";
import validator from "validator";
import Header1 from "./Header1";

export default function Login(props) {
  const location = useLocation();
  console.log("Header" + location.detail);
  const [state, setState] = useState([]);
  const [errorUsername, setErrorUsername] = useState([]);
  const [errorPassword, setErrorPassword] = useState([]);

  const validate = (value) => {
    console.log(value);
    if (!value) {
      setErrorPassword("Required");
    } else {
      if (
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        setErrorPassword("Is Strong Password");
      } else {
        setErrorPassword("Is Not Strong Password");
      }
    }
  };

  const validateName = (value) => {
    if (!value) {
      setErrorUsername("Required");
    } else {
      var pass = value;
      var reg = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/";
      // var test = reg.test(pass);
      // if (test) {
      //   setErrorUsername("Is Strong Password");
      // } else {
      //   setErrorUsername("Is Not Strong Password");
      // }
    }
    console.log(value);
  };

  const onSubmit = () => {
    state.userData = JSON.parse(localStorage.getItem("user"));
    console.log(state.userData);

    if (localStorage.getItem("user")) {
      setState({
        username: state.userData.username,
        password: state.userData.password,
      });
    } else {
      setState({
        username: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify());
  }, [onSubmit]);

  return (
    <div className="login">
      <div className="login__container">
        {/* <Header1 detail={statename.selectValue} /> */}
        {/* {/ login container 2 /} */}
        <div className="login__container1">
          <div className="login__form">
            <form>
              {/* // onSubmit={state.handleSubmit}> */}
              <img className="login__stepApplogo" src={StepApp} alt="" />
              <div>
                <div className="login__text">
                  <label>Sign in to your account to continue</label>
                </div>
                <div className="login__con">
                  <input
                    type="text"
                    placeholder="User Name"
                    // value={state.username}
                    className="login__input"
                    onInput={(e) => validateName(e.target.value)}
                  />
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    {errorUsername}
                  </span>

                  <input
                    type="text"
                    placeholder="Password"
                    // value={state.password}
                    className="login__input"
                    onInput={(e) => validate(e.target.value)}
                  />
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    {errorPassword}
                  </span>

                  {/* <p>{error}</p> */}
                  <div className="login__link">
                    <label className="login__outerLink">
                      Don’t have an account?
                      <Link className="login__innerLink"> Sign Up</Link>
                    </label>
                  </div>
                  <Link to="/subject">
                    <button
                      onSubmit={onSubmit}
                      type="submit"
                      className="login__formbtn"
                    >
                      Proceed
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* {/ login container 2 end /} */}
        <div className="login__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* {/ login container end  /} */}
    </div>
  );
}
