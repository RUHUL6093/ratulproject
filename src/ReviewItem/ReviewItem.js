import React from "react";
const ReviewItem = (props) => {
  const { name, quantity } = props.product;
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        marginBottom: "5px",
        paddingBottom: "5px",
        marginLeft: "20px"
      }}
    >
      <h1 className="product-name"> {name}</h1>
      <p> Quantity:{quantity}</p>
      <br />
      <button className="btn btn-primary">Remove item </button>
    </div>
  );
};
export default ReviewItem;
