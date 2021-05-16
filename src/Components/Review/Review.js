import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart
} from "../../Utilities/databaseManager";
import Fakedata from "../../Fakedata/fakedata.json";
import ReviewItem from "../../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
// import { Link } from "react-router-dom";
const Review = () => {
  const [cart, setCart] = useState([]);
  const removeProduct = (name) => {
    console.log("remove clicked", name);
    const newCart = cart.filter((product) => product.name !== name);
    setCart(newCart);
    removeFromDatabaseCart(name);
  };
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productnames = Object.keys(saveCart);
    const cartProduct = productnames.map((name) => {
      const product = Fakedata.find((product) => product.name === name);
      product.quantity = saveCart[name];
      return product;
    });
    // console.log(cartProduct);
    setCart(cartProduct);
  });
  return (
    <div className="Home-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem product={product} removeProduct={removeProduct}>
            {" "}
          </ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          {/* <Link to="/review">
            <button className="btn btn-success">Review Order</button>
          </Link> */}
        </Cart>
      </div>
    </div>
  );
};
export default Review;
