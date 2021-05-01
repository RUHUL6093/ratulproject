import React from "react";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const cart = props.cart;
  //
  const total = cart.reduce((total, product) => total + product.price, 0);
  return (
    <div>
      <h1>Order Summery</h1>
      <h4>Item ordered: {cart.length}</h4>
      <p> Toatal Price :{total}</p>
      <br />
      <Link to="/review">
        <button className="btn btn-success">Review Order</button>
      </Link>
    </div>
  );
};
export default Cart;
