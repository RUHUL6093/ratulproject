import React from "react";
import logo from "../Images/grameenponn.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" />
      <nav>
        <a href="/home">Home</a>
        <a href="/review">Order Review</a>
        <a href="/deals">Deals</a>
        <a href="/admin">Admin</a>
        <a href="/login">login</a>
      </nav>
    </div>
  );
};
export default Header;
