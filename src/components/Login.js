import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import StepApp from "../assests/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [states, setState] = useState([]);
  const [errors, setError] = useState();
  useEffect(
    () => {
      axios
        .get(`https://reqres.in/api/users?page=2`)
        .then((response) => {
          setState(response.data.data);
        })
        .then((err) => setError(err));
    },
    [states],
    [errors]
  );

  const error = () => {
    return (
      <div className=" error alert alert-danger " role="alert">
        Error: There is no data
      </div>
    );
  };

  return (
    <div className="login">
      <div className="login__container">
        {/* login container 2 */}
        <div className="login__container1">
          <div className="login__form">
            <img className="login__stepApplogo" src={StepApp} alt="" />
            <div>
              <div className="login__text">
                <label>Sign in to your account to continue</label>
              </div>
              <div className="login__con">
                <input
                  type="text"
                  placeholder="Full Name"
                  value=""
                  className="login__input"
                />
                <input
                  type="text"
                  placeholder="Password"
                  value=""
                  className="login__input"
                />
                <div className="login__link">
                  <label className="login__outerLink">
                    Don’t have an account?
                    <Link className="login__innerLink"> Sign Up</Link>
                  </label>
                </div>
                <button className="login__formbtn">Proceed</button>
              </div>
            </div>
          </div>
        </div>
        {/* login container 2 end */}
        <div className="login__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* login container end  */}
    </div>
  );
}
