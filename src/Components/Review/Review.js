import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart
} from "../../Utilities/databaseManager";
import Fakedata from "../../Fakedata/fakedata.json";
import ReviewItem from "../../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
const Review = () => {
  const [cart, setCart] = useState([]);
  const history = useHistory();
  const handleProceedCheckout = () => {
    history.push("/shipment");
  };
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
          <button onClick={handleProceedCheckout} className="btn btn-success">
            Proceed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};
export default Review;
