import { Button, Card, Pagination, PaginationProps, Rate } from "antd";

import Meta from "antd/es/card/Meta";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { TProduct } from "./product.const";
import { NavLink } from "react-router-dom";
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
    // fetch data with search query
  };
  //console.log(products?.data);
  console.log(query);
  return (
    <div className="pt-4">
      {/**search bar */}
      <div className="grid md:grid-cols-4 mx-16">
        <div className=" md:col-span-3 ">
          <h1 className="text-center p-4 pt-16 mb-16 font-bold text-4xl font-serif tracking-widest border-b-2 border-amber-950">
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
                className="ml-2 w-full outline-none py-1"
              />
            </div>
            <Button
              htmlType="submit"
              className="bg-[#001529] p-6 text-[white] text-xl mb-4"
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

      <div className="flex gap-8 flex-wrap justify-center mx-8">
        {products?.data?.map((product: TProduct) => (
          <Card
            style={{ width: 350 }}
            key={product._id}
            cover={
              <img alt="example" className="size-72 p-2" src={product.image} />
            }
            className=""
            actions={[
              <NavLink to={`/products/${product._id}`}>
                <Button className="bg-[#001529] p-6 text-[white] text-xl w-full">
                  Explore
                </Button>
              </NavLink>,
              // <EditOutlined key="edit" />,
            ]}
          >
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold ">{product.name}</h2>
                <p className="text-xl text-[#a4acba]">{product.brand}</p>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">
                  Price: {product.price}
                </h3>
                <Meta
                  className="text-xl"
                  description={`category: ${product.category}`}
                />
              </div>
            </div>
            <hr />
            <div className="my-2">
              <p className="text-lg">{product.description.slice(0, 100)}...</p>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-4 text-[16px]">
              <Rate className="mt-2" disabled defaultValue={product.rating} />
              <p className="text-xl">stock: {product.stock}</p>
            </div>
          </Card>
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
          itemRender={(_current, type, originalElement) => (
            <span
              className={`${
                type === "page" ? "text-xl" : ""
              } ant-pagination-item-link`}
            >
              {originalElement}
            </span>
          )}
        ></Pagination>
      </div>
      {/* PAGINATION */}
    </div>
  );
};

export default Products;
