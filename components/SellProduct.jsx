import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SellProduct() {
  const API_URL = "https://e-boi-api.adaptable.app/products";
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    let newObject = {
      name: name,
      description: description,
      price: description,
      category: category,
      brand: brand,
      image: image,
    };
    axios
      .post(API_URL, newObject)
      .then((response) => {
        navigate("/");
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>Product</label>
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
          placeholder="Your Product description here"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <label>Category</label>
        <input
          type="text"
          value={category}
          placeholder="Your Product description here"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        ></input>
        <label>Brand</label>
        <input
          type="text"
          value={brand}
          placeholder="Your Product description here"
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        ></input>
        <label>Image</label>
        <input
          type="text"
          value={image}
          placeholder="Your Product description here"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
        <button type="submit"></button>
      </form>
    </>
  );
}

export default SellProduct;
