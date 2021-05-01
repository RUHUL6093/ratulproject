import React from "react";
import { useState } from "react";
import Fakedata from "../../Fakedata/fakedata.json";
import { addToDatabaseCart } from "../../Utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    console.log(product);
    const NewCart = [...cart, product];
    setCart(NewCart);
    addToDatabaseCart(product.name, 1);
  };
  return (
    <div className="Home-container">
      <div className="product-container">
        {Fakedata.map((product) => (
          <Product
            showAddToCart={true}
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
