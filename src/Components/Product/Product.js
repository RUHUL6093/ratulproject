import React from "react";
import "./Product.css";
const Product = (props) => {
  const { img, name, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h3>{name} </h3>
      </div>
    </div>
  );
};
export default Product;
