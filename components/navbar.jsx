import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="./Images/E-boi-logo.png" alt="logo" className="imageLogo" />
      </div>
      <div className="options-menu">
        <div>
          <Link to="/">Shop</Link>{" "}
        </div>
        <div>
          {" "}
          <Link to="/cart">cart</Link>{" "}
        </div>
        <div>
          {" "}
          <Link to="/sell">Sell your Product</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
