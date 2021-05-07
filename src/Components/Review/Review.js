import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../Utilities/databaseManager";
import Fakedata from "../../Fakedata/fakedata.json";
import ReviewItem from "../../ReviewItem/ReviewItem";
const Review = () => {
  const [cart, setCart] = useState([]);
  const removeProduct = (name) => {
    console.log("remove clicked", name);
    const newCart = cart.filter((product) => product.name !== name);
    setCart(newCart);
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
    <div>
      <h1>cart items :{cart.length}</h1>
      {cart.map((product) => (
        <ReviewItem product={product} removeProduct={removeProduct}>
          {" "}
        </ReviewItem>
      ))}
    </div>
  );
};
export default Review;
