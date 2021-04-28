import React, { useState } from "react";
import Fakedata from "../../Fakedata/fakedata.json";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home-container">
      <div className="product-container">
        <ul>
          {Fakedata.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <h3>this is cart </h3>
      </div>
    </div>
  );
};
export default Home;
