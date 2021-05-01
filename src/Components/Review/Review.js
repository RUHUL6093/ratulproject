import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../Utilities/databaseManager";
import Fakedata from "../../Fakedata/fakedata.json";
const Review = () => {
  const [cart, setCart] = useState([]);
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
    </div>
  );
};
export default Review;
