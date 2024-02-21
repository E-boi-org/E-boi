import React, { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    message: "",
    rating: "",
  });

  useEffect(() => {
    axios
      .get("https://e-boi-api.adaptable.app/reviews/")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://e-boi-api.adaptable.app/reviews/",
        formData
      );
      console.log("Review submitted successfully:", response.data);
      setReviews([...reviews, response.data]);
      setFormData({ message: "", rating: "" });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.message}</p>
          </li>
        ))}
      </ul>
      <h2>Leave your review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
