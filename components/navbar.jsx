import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <img src="./Images/E-boi-logo.png" alt="logo" className="image-logo" />
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/sell">Sell your Product</Link>
        </li>        
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
