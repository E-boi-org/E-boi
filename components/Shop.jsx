import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "./useApi.jsx";

function Shop() {
  const { data, loading, error, fetchData } = useApi(); // Assuming fetchApi provides refetch function
  const navigate = useNavigate();

  const deleteProduct = async (productId) => {
    try {
      const response1 = await fetch(
        `https://e-boi-api.adaptable.app/products/${productId}`,
        { method: "DELETE" }
      );
      await fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error
    }
  };

  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="Shop">
        <h1>Loja que vende bue de cenas</h1>
        <div className="product-container">
          {data &&
            data.map((product, index) => (
              <div key={index}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-window"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
