import { Avatar, Card } from "antd";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import SingleProduct from "./SingleProduct";
import { TProduct } from "./product.const";
const Products = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);
  if (isLoading) return <p>loading..</p>;
  console.log(products?.data);

  return (
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
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            }
            title={product.name}
            description={product.description}
          />
        </Card>
      ))}
    </div>
  );
};

export default Products;
