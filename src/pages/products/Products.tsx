import { Button, Pagination, PaginationProps } from "antd";

import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { TProduct } from "./product.const";
import {  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomFilter from "../../components/CustomFilter";
import { useState } from "react";

const Products = () => {
  /* FILTERING */
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [query, setQuery] = useState({});
  const { data: products, isLoading } = useGetAllProductsQuery(query, {
    pollingInterval: 30000,
  });
  const { register, handleSubmit } = useForm();
  /* FILTERING */

  /* PAGINATION*/
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const navigate = useNavigate();
  if (isLoading) return <p>loading..</p>;
  const onChange: PaginationProps["onChange"] = (e) => {
    setCurrentPage(e);
    const newQuery = {
      searchTerm,
      category: category,
      brand: brand,
      rating: rating,
      price: price,
      page: e,
      limit: productsPerPage,
    };
    setQuery(newQuery);
  };
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (e, ee) => {
    setProductsPerPage(ee);
    setCurrentPage(e);
    const newQuery = {
      searchTerm,
      category: category,
      brand: brand,
      rating: rating,
      price: price,
      page: e,
      limit: ee,
    };
    setQuery(newQuery);
  };
  /* PAGINATION*/

  // search functionality
  const onSubmit = () => {
    const newQuery = {
      searchTerm,
      category: category,
      brand: brand,
      rating: rating,
      price: price,
      page: currentPage,
      limit: productsPerPage,
    };
    setQuery(newQuery);
  };
  return (
    <div className="pt-4">
      {/**search bar */}
      <div className="grid md:grid-cols-4 mx-16">
        <div className=" md:col-span-3 ">
          <h1 className="text-[white] text-center p-4 pt-16 mb-16 font-bold text-4xl font-serif tracking-widest border-b-2 border-[#606C38]">
            Choose Affordable Sporting Item
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center gap-8  items-center justify-center"
          >
            <div className="flex items-center bg-white border rounded shadow-sm mb-4 p-2 w-2/3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M18.65 10.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                ></path>
              </svg>
              <input
                {...register("name")}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search..."
                className="ml-2 w-full outline-none"
              />
            </div>
            <Button
              htmlType="submit"
              className="bg-[#606C38] p-5 text-[white] text-lg mb-4"
            >
              Search
            </Button>
          </form>
        </div>
        <CustomFilter
          category={category}
          brand={brand}
          rating={rating}
          price={price}
          setCategory={setCategory}
          setBrand={setBrand}
          setRating={setRating}
          setPrice={setPrice}
          onSubmit={onSubmit}
        ></CustomFilter>
        <div></div>
        <div></div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center mx-4">
        {products?.data?.map((product: TProduct) => (
          <div onClick={()=>{
            navigate(`/products/${product._id}`)
          }} className="cursor-pointer   sm:w-[300px] rounded-xl overflow-hidden bg-[#606c38] shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            {/* Image Section */}
            <div className="p-4  flex justify-center items-center">
              <img
                alt={product.name}
                src={product.image}
                className="size-64 p-2 rounded-lg bg-[#f4f4f4] object-cover  shadow-md transition-all duration-300 hover:shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="px-5 py-4">
              {/* Product Name & Price */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <h3 className="text-lg font-extrabold text-green-600">BDT {product.price}</h3>
              </div>

              <hr className="my-2 border-gray-300" />

              {/* Rating & Stock */}
              <div className="flex justify-between items-center mt-3">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg ${index < product.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Stock Status */}
                <p
                  className={`text-lg font-semibold ${product.stock > 0 ? "text-gray-800" : "text-red-500"
                    }`}
                >
                  {product.stock > 0 ? `Stock: ${product.stock}` : "Out of Stock"}
                </p>
              </div>

              {/* Explore Button */}
              {/* <NavLink to={`/products/${product._id}`} className="block mt-4">
                <button className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white text-lg rounded-md py-3 font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Explore
                </button>
              </NavLink> */}
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-8 p-8">
        <Pagination
          defaultCurrent={1}
          total={500}
          onChange={onChange}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          className=""
        ></Pagination>
      </div>
      {/* PAGINATION */}
    </div>
  );
};

export default Products;
