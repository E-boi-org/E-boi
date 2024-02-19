import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="./Images/E-boi-logo.png" alt="logo" className="imageLogo" />
      </div>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/cart">cart</Link>
      </div>
    </>
  );
}

export default Navbar;
