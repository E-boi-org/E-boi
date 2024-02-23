import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "./useApi.jsx";

function Shop() {
  const { data, loading, error, fetchData } = useApi();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const getTotalPrice = () => {
    return cart.reduce((total, currentItem) => {
      return total + parseFloat(currentItem.price);
    }, 0);
  };

  const addToCart = (e) => {
    setCart((currentItems) => [...currentItems, e]);
  };
  function removeFromCart(e) {
    const newList = cart.filter((item) => item.id !== e.id);
    setCart(newList);
  }
  function deleteCart() {
    setCart([]);
    navigate("/purchasepage");
  }

  const deleteProduct = async (productId) => {
    try {
      const response1 = await fetch(
        `https://e-boi-api.adaptable.app/products/${productId}`,
        { method: "DELETE" }
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  if (loading) return <h1>Loading</h1>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="shop">
        <div className="div-form">
          <form>
            <label>Product</label>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              className="input-form"
            ></input>
          </form>
        </div>
        <div className="product-container">
          {data &&
            data
              .filter((product) => {
                return search.toLowerCase() === ""
                  ? product
                  : product.name.toLowerCase().includes(search);
              })
              .map((product) => (
                <div key={product.id} className="item-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-window"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />{" "}
                  <div className="item-container-data">
                    <h2>{product.name}</h2>
                    <p>{product.price}€</p>
                  </div>
                  <button onClick={() => deleteProduct(product.id)}>Buy</button>
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
        </div>
        <div className="shop-top">
          <img src="./images/small-logo-nobg.png" className="cart"></img>
          {cart &&
            cart.map((e) => (
              <div key={e.id} className="product-cart">
                <img src={e.image} className="image-cart"></img> {e.price}
                <p>{e.name}</p>
                <button onClick={() => removeFromCart(e)}>
                  Remove From Cart
                </button>
              </div>
            ))}
          <div className="total-price">Total Price: ${getTotalPrice()}</div>
          <button onClick={deleteCart}>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
