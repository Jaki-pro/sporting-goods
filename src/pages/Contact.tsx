import { Button } from "antd";
import React, { useState, ChangeEvent } from "react";

const Contact: React.FC = () => {
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setCategory(e.target.value);
  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setBrand(e.target.value);
  const handlePriceChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setPrice(e.target.value);
  const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setRating(e.target.value);

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
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-full mx-auto sm:flex gap-2">
      <div className="mb-4">
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
        </select>
      </div>
      <div className="mb-4">
        <select
          id="brand"
          value={brand}
          onChange={handleBrandChange}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a brand</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
          <option value="brandC">Brand C</option>
        </select>
      </div>
      <div className="mb-4">
        <select
          id="price"
          value={price}
          onChange={handlePriceChange}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a price range</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>
      <div className="mb-4">
        <select
          id="rating"
          value={rating}
          onChange={handleRatingChange}
          className="block appearance-none w-full bg-gray-100 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <Button onClick={handleSubmit} className="">
        Apply Filters
      </Button>
    </div>
  );
};

export default Contact;
