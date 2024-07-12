import React, { useState } from "react";

const About = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleRatingChange = (e) => setRating(e.target.value);

  const handleSubmit = () => {
    // Implement the logic to handle the filter submission
    console.log({
      category,
      brand,
      price,
      rating,
    });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-1/6">
      <h2 className="text-xl font-bold mb-4">Filter</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="brand"
        >
          Brand
        </label>
        <select
          id="brand"
          value={brand}
          onChange={handleBrandChange}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a brand</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
          <option value="brandC">Brand C</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <select
          id="price"
          value={price}
          onChange={handlePriceChange}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a price range</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Rating
        </label>
        <select
          id="rating"
          value={rating}
          onChange={handleRatingChange}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default About;
