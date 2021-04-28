import React from "react";
const Cart = (props) => {
  const cart = props.cart;
  return (
    <div>
      <h1>Order Summery</h1>
      <h4>Item ordered: {cart.length}</h4>
    </div>
  );
};
export default Cart;
