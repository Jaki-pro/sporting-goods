import { Button } from "antd";
import { useState, ChangeEvent, SetStateAction, Dispatch, FC } from "react";

const CustomFilter = ({
  brand,
  rating,
  price,
  category,
  setCategory,
  setBrand,
  setRating,
  setPrice,
}: {
  category: string;
  brand: string;
  rating: string;
  price: string;
  setCategory: Dispatch<SetStateAction<string>>;
  setBrand: Dispatch<SetStateAction<string>>;
  setRating: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<string>>;
}) =>
  //   setBrand: Dispatch<SetStateAction<string>>,
  //   setRating: Dispatch<SetStateAction<string>>,
  //   setPrice: Dispatch<SetStateAction<string>>
  {
    //   const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) =>
    //     setBrand(e.target.value);
    //   const handlePriceChange = (e: ChangeEvent<HTMLSelectElement>) =>
    //     setPrice(e.target.value);
    //   const handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) =>
    //     setRating(e.target.value);

    return (
      <div className="p-6  rounded-lg max-w-full mx-auto sm:flex gap-2 items-center justify-center mb-8">
        <p className="tracking-wider font-semibold mb-4">Filter Products: </p>
        <div className="mb-4">
          <select
            id="category"
            onChange={(e) => setCategory(e.target.value)}
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
            onChange={(e) => setBrand(e.target.value)}
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
            onChange={(e) => setPrice(e.target.value)}
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
            onChange={(e) => setRating(e.target.value)}
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
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Clear Filter
        </Button>
      </div>
    );
  };

export default CustomFilter;
