import React from "react";
import Chapters from "./Chapters";
import { detailProduct } from "../data";

function ChaptersList() {
  const [states, setState] = useState([]);
  useEffect(states.getItem[states]);

  getItem = (id) => {
    const product = states.products.find((item) => item.id === id);
    setState(() => {
      return { detailProduct: product };
    });
  };

  return (
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1">
          <div className="chap__container">
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
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

export default ChaptersList;
