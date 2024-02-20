import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "./useApi.jsx";

function Shop() {
  const { data, loading, error, fetchData } = useApi();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const deleteProduct = async (productId) => {
    try {
      const response1 = await fetch(
        `https://e-boi-api.adaptable.app/products/${productId}`,
        { method: "DELETE" }
      );
      await fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <form>
        <label>Product</label>
        <input
          type="text"
          placeholder="Your Product here"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <div className="Shop">
        <h1>Loja que vende bue de cenas</h1>
        <div className="product-container">
          {data &&
            data
              .filter((product) => {
                return search.toLowerCase() === ""
                  ? product
                  : product.name.toLowerCase().includes(search);
              })
              .map((product, index) => (
                <div key={index}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-window"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <h2>{product.name}</h2>
                  <p>{product.price}€</p>
                  <button onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                  <button>Add to Cart</button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
