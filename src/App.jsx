import React from "react";
import "./App.css";
import "../components/Header.css";
import "../components/Footer.css";
import "../components/SideBar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import fetchApi from "../components/fetchApi.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  const { data, loading, error } = fetchApi();

  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="Loja">
        <h1>Loja que vende bue de cenas</h1>
        <div className="product-container">
          {data.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
