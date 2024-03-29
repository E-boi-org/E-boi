import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditProduct from "./EditProduct";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://e-boi-api.adaptable.app/products/${productId}`
        );
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        edit
      </button>
      {!display ? <p></p> : <EditProduct />}
      <div className="product-details">
        <h2>{product.name}</h2>
        <img src={product.image} className="img-details" />
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
