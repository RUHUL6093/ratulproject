import React from "react";
const Product = (props) => {
  console.log(props.product.name);
  return (
    <div>
      <div>
        <img src={props.product.img} alt="" />
      </div>
      <div>
        <h1>{props.product.name} </h1>
      </div>
    </div>
  );
};
export default Product;
