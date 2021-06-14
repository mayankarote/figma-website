import React, { useState, useEffect } from "react";
import "./Subject.css";
import { storeProducts, detailProduct } from "./data";
import { Link } from "react-router-dom";

export default function Chapters(props) {
  const { id, title, img, price, inCart } = this.props.product;

  const [states, setState] = useState([]);
  useEffect(
    (id) => {
      let products = [];
      storeProducts.forEach((item) => {
        const singleItem = { ...item };
        products = [...products, singleItem];
      });
      setState(() => {
        return { products };
      }, states.checkCartItems);

      const product = states.products.find((item) => item.id === id);
      setState(() => {
        return { detailProduct: product };
      });
    },
    [states]
  );

  return (
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1">
          <div className="chap__container"></div>
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
