import React from "react";
import { useState } from "react";
import Fakedata from "../../Fakedata/fakedata.json";
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
        <h3>this is cart </h3>
        <h5>Order summery :{cart.length}</h5>
      </div>
    </div>
  );
}
export default Home;
