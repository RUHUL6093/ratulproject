import React from "react";
import { useState } from "react";
import Fakedata from "../../Fakedata/fakedata.json";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    console.log(product);
    const NewCart = [...cart, product];
    setCart(NewCart);
  };
  return (
    <div className="Home-container">
      <div className="product-container">
        {Fakedata.map((product) => (
          <Product
            product={product}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}
export default Home;
