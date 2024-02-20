import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p className="Copyright">Copyright © 2024</p>
      <ul className="Footer-links">
        <li><a href="https://github.com/RuiDuram" target="_blank" rel="noopener noreferrer">Rui Duram</a></li>
        <li><a href="https://github.com/jvfd1983" target="_blank" rel="noopener noreferrer">João Dias</a></li>
      </ul>
    </div>
  );
}

export default Footer;
