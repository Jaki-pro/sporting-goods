import React from "react";
import { TProduct } from "./product.const";

const SingleProduct = ({ product }: { product: TProduct }) => {
  return <div>{product.name}</div>;
};

export default SingleProduct;
