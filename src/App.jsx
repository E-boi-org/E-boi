import React from "react";
import "./App.css";
import "../components/navbar.css";
import "../components/Footer.css";

import { Route, Routes } from "react-router-dom";
import useApi from "../components/useApi.jsx";
import Footer from "../components/Footer.jsx";
import SellProduct from "../components/SellProduct.jsx";
import ProductDetails from "../components/productDetails.jsx";
import HomePage from "../components/HomePage.jsx";
import Navbar from "../components/navbar.jsx";
import Reviews from "../components/Reviews.jsx";
import AboutPage from "../components/AboutPage.jsx";
import PurchasePage from "../components/PurchasePage.jsx";

function App() {
  const { loading, error } = useApi();

  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/sell" element={<SellProduct />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/purchasepage" element={<PurchasePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
