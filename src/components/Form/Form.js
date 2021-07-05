import React, { useState, useEffect } from "react";
import "./Form.css";
import StepApp from "../../assests/logo.png";
import { Link, useHistory } from "react-router-dom";

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
    <div>
      <form onSubmit={onSubmit}>
        <img className="login__stepApplogo" src={StepApp} alt="" />
        <div>
          <div className="login__text">
            <label>Sign in to your account to continue</label>
          </div>
          <div className="login__con">
            <input
              type="text"
              placeholder="Mobile No"
              value={mobileNo}
              className="login__input"
              onChange={validationMobileno}
              minLength={10}
              maxLength={10}
              required
            />
            <input
              type="password"
              placeholder="First Password"
              value={password.value}
              className="login__input"
              onChange={validatePassword}
              required
            />
            <p style={{ color: "red" }}>
              {password.isValid ? "Valid Password" : "Invalid Password"}
            </p>
            <div className="login__link">
              <label className="login__outerLink">
                Don’t have an account?
                <Link className="login__innerLink"> Sign Up</Link>
              </label>
            </div>
            <button type="submit" className="login__formbtn">
              Proceed
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
