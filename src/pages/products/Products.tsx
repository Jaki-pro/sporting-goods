import { Button, Card, Rate } from "antd";

import Meta from "antd/es/card/Meta";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../redux/features/products/productApi";
import { TProduct } from "./product.const";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux/features/cart/cartSlice";
import { FieldValues, useForm } from "react-hook-form";
import CustomFilter from "../../components/CustomFilter";
import { useState } from "react";

const Products = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [query, setQuery] = useState({});
  const { data: products, isLoading } = useGetAllProductsQuery(query);
  const [deletProduct] = useDeleteProductMutation();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  if (isLoading) return <p>loading..</p>;
  const handleDeleteProduct = (id: string) => {
    deletProduct(id);
    dispatch(removeFromCart(id));
  };
  // search functionality
  const onsubmit = (data: FieldValues) => {
    const newQuery = {
      searchTerm: data.name,
      category: category,
      brand: brand,
      rating: rating,
      price: price,
    };
    setQuery(newQuery);
    // fetch data with search query
  };
  //console.log(products?.data);
  console.log(query);
  return (
    <div>
      <h1 className="text-4xl font-bold pt-12 pb-4 text-center mb-12">
        Choose Affordable Sporting Item
      </h1>
      {/**search bar */}
      <div className="">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex justify-center gap-8 mx-8 items-center "
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
              type="text"
              placeholder="Search..."
              className="ml-2 w-full outline-none"
            />
          </div>
          <Button htmlType="submit" className="mb-4">
            Search
          </Button>
        </form>
        <CustomFilter
          category={category}
          brand={brand}
          rating={rating}
          price={price}
          setCategory={setCategory}
          setBrand={setBrand}
          setRating={setRating}
          setPrice={setPrice}
        ></CustomFilter>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {products?.data?.map((product: TProduct) => (
          <Card
            style={{ width: 300 }}
            key={product._id}
            cover={
              <img alt="example" className="size-64 p-2" src={product.image} />
            }
            className=""
            actions={[
              <NavLink to={`/products/${product._id}`}>
                <Button className="bg-[#001529] text-[white]">Explore</Button>
              </NavLink>,
              // <EditOutlined key="edit" />,
              <Button
                onClick={() => handleDeleteProduct(product._id)}
                type="primary"
                danger
                ghost
              >
                Delete
              </Button>,
            ]}
          >
            <div className="flex justify-between">
              <Meta title={product.name} description={product.brand} />
              <div>
                <Meta title={`price: ${product.price} $`} />
                <Rate className="mt-2" disabled defaultValue={product.rating} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
