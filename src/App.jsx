import React from "react";
import "./App.css";
import "../components/navbar.css";
import "../components/Footer.css";
import "../components/SideBar.css";
import { Route, Routes } from "react-router-dom";
import useApi from "../components/useApi.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import SellProduct from "../components/SellProduct.jsx";
import ProductDetails from "../components/productDetails.jsx";
import HomePage from "../components/HomePage.jsx";

function App() {
  const { loading, error } = useApi();

  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/sell" element={<SellProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
