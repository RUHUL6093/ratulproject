import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = (props) => {
  const { img, name, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
      
        <h3><Link to={'/product/'+name}>{name}</Link></h3>
        <p>{price}Taka </p>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => props.handleAddProduct(props.product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default Product;
