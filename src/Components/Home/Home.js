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
    const sameProduct = NewCart.filter((pd) => pd.name === product.name);
    const count = sameProduct.length;
    addToDatabaseCart(product.name, count);
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
