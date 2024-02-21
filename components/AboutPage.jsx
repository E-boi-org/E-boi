import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-body">
      <h2>About Us</h2>
      <p>
        Welcome to our technology store! We are a platform dedicated to buying
        and selling of high-quality technology-related products.
      </p>
      <p>
        Our mission is to provide an exceptional shopping experience, connecting
        customers with the best products available in the market.
      </p>
      <div>
        <p>Team members:</p>
        <span>Team member 1: Rui Duram - GitHub </span>
        <a href="https://github.com/RuiDuram">RuiDuram</a>
        <span>Team member 2: João Dias - GitHub </span>
        <a href="https://github.com/jvfd1983">jvfd1983</a>
      </div>
    </div>
  );
}

export default AboutPage;
