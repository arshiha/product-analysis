import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navber">
      <h2>The Cemera Shop</h2>
      <div>
        <a href="/home">HOME</a>
        <a href="/reviews">REVIEWS</a>
        <a href="/dashboard">DASHBOARD</a>
        <a href="/blogs">BLOGS</a>
        <a href="/about">ABOUT</a>
      </div>
    </nav>
  );
};

export default Navbar;
