import React from "react";
import "./App.css";
import "../components/navbar.css";
import "../components/Footer.css";
import "../components/SideBar.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import useApi from "../components/useApi.jsx";
import Header from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import Shop from "../components/Shop.jsx";
import ProductDetails from "../components/productDetails.jsx";

function App() {
  const { loading, error } = useApi();

  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <div>
        <Shop />
      </div>
      <Footer />
      <Routes>
        <Route path="/" />
        <Route path="/cart" />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
