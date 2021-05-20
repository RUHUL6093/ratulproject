import React from "react";
// import TweenLite from 'gsap/TweenLite'
import Fakedata from "../../Fakedata/fakedata.json";
const Admin = () => {
  const handleAddProduct = () => {
    fetch('https://5562b.sse.codesandbox.io/addProducts',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(Fakedata[0])
  })
  return (
    <div>
      <button onClick={handleAddProduct}>Add Product </button>
    </div>
  );
}; 

export default Admin;
