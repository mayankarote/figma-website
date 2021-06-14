import React, { useState, useEffect } from "react";
import "./Subject.css";
import { storeProducts } from "./data";

export default function Chapters(props) {
  const { title, img, info, info2 } = props.product;
  const [states, setState] = useState([]);

  useEffect(() => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setState(products);
  }, [states]);

  return (
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1">
          <div className="chap__container">
            <div className="chap__title">{title}</div>
            <div className="chap__info">{info}</div>
            <div className="chap__info2">{info2}</div>
            <div className="chap__img">{img}</div>
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
