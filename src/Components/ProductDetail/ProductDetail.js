import React from "react";
import { useParams } from "react-router-dom";
import Fakedata from "../../Fakedata/fakedata.json";
import Product from "../Product/Product";
const ProductDetail = () => {
  const { name } = useParams();
  const product = Fakedata.find((product) => product.name === name);
  console.log(product);
  return (
    <div>
      <h1>{name}soooooooooooon</h1>
      <Product product={product}></Product>
    </div>
  );
};
export default ProductDetail;
