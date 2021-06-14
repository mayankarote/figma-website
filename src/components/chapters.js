import React, { useState, useEffect } from "react";
import "./Subject.css";
import { Link } from "react-router-dom";

export default function chapters() {
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
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1"></div>
        {/* login container 2 end */}
        <div className="login__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* login container end  */}
    </div>
  );
}
