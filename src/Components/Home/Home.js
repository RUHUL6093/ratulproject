import React from "react";
import Fakedata from "../../Fakedata/fakedata.json";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
  const handleAddProduct = () => {
    console.log("product added");
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
      </div>
    </div>
  );
}
export default Home;
