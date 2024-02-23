import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { productId } = useParams();
  const API_URL_ID = `https://e-boi-api.adaptable.app/products/${productId}`;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL_ID)
      .then((response) => {
        const product = response.data;
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setBrand(product.brand);
        setImage(product.image);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [API_URL_ID]);

  function handleFormSubmit(e) {
    e.preventDefault();
    let updatedObject = {
      name: name,
      description: description,
      price: price,
      category: category,
      brand: brand,
      image: image,
    };
    axios
      .put(API_URL_ID, updatedObject)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Your Product here"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Description</label>

        <input
          type="text"
          value={description}
          placeholder="Your Product description here"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <label>Price</label>
        <input
          type="number"
          value={price}
          placeholder="Your Product price here"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label>Category</label>
        <input
          type="text"
          value={category}
          placeholder="Your Product category here"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        <label>Brand</label>
        <input
          type="text"
          value={brand}
          placeholder="Your Product brand here"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        ></input>
        <label>Image</label>
        <input
          type="text"
          value={image}
          placeholder="Your Product image URL here"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
        <button type="submit">Update Product</button>
      </form>
    </>
  );
}

export default EditProduct;
