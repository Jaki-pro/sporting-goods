import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import Cart from "./Cart";
import { Button } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { NavLink } from "react-router-dom";

const CartItems = () => {
  const { items } = useAppSelector((state) => state.cart);
  const { data: products, isLoading } = useGetAllProductsQuery({});
  const [isDisabled, setIsDisabled] = useState(false);
  if (isLoading) return <p>loading..</p>;
  const { data } = products;
  let isExceedQuantity = 0;
  data.forEach((product: any) => {
    const productId = product._id;
    const productInCart = items.find(
      (item) => item.productId === productId && item.quantity > product.stock
    );
    productInCart && isExceedQuantity++;
  });
  //console.log(data);
  const cost = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  //console.log(items);
  return (
    <div className="flex">
      <div className="flex-3 p-5 w-full h-full  rounded-lg space-y-3">
        <h1 className="text-center p-4 font-bold text-4xl font-serif tracking-widest border-b-4 border-amber-950">
          Shopping Cart
        </h1>
        <hr style={{ width: "100%" }} />
        {items.map((item, index) => (
          <Cart key={index} item={item} />
        ))}
      </div>
      <div className="flex-2  bg-[#0F3151] p-2 mx-4" style={{ width: "40%" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <h1 className="text-3xl text-slate-100 font-bold mb-4 tracking-widest font-serif">
            Summary
          </h1>
          <h3 className="text-lg text-slate-100 font-bold mb-2  font-serif">
            Expense Overview
          </h3>
          <hr style={{ width: "100%" }} />
          <div className="my-8 flex flex-col gap-4">
            <div className="flex">
              <p className="text-slate-100 flex-1">Subtotal: </p>
              <p className="text-slate-100 flex-1">{cost.toFixed(2)} $</p>
            </div>
            <div className="flex">
              <p className="text-slate-100 flex-1">VAT: </p>
              <p className="text-slate-100 flex-1">
                {((cost * 15) / 100).toFixed(2)} $
              </p>
            </div>
            <div className="flex">
              <p className="text-slate-100 flex-1">Total: </p>
              <p className="text-slate-100 flex-1">
                {(cost + (cost * 15) / 100).toFixed(2)} $
              </p>
            </div>
          </div>
          <hr />

          {isExceedQuantity ? (
            <Button
              disabled
              className="w-full bg-[#001529] text-[white] h-12 mt-8 "
            >
              Proceed to Checkout
            </Button>
          ) : (
            <NavLink to="/place-order">
              <Button className="w-full bg-[#001529] text-[white] h-12 mt-8">
                Proceed to Checkout
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
