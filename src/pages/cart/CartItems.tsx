import { useAppSelector } from "../../redux/hooks";
import Cart from "./Cart";
import { Button } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CartItems = () => {
  const { items } = useAppSelector((state) => state.cart);
  const { data: products, isLoading } = useGetAllProductsQuery({});
  const { token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  if (isLoading) return <p>loading..</p>;
  const { data } = products;
  let isExceedQuantity = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="sm:flex">
      <div className="flex-3 p-5 w-full h-full  rounded-lg space-y-3">
        <h1 className="text-center text-white p-4 font-bold text-4xl font-serif tracking-widest ">
          Shopping Cart
        </h1>
        <hr style={{ width: "100%" }} />
        {items.map((item, index) => (
          <Cart key={index} item={item} />
        ))}
      </div>
      <div
        className="flex-2  bg-[#BC6C25] p-2 mx-auto"
        style={{ width: "40%" }}
      >
        <div style={{ width: "100%", textAlign: "center" }} className="">
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
              <p className="text-slate-100 flex-1">{cost.toFixed(2)} </p>
            </div>
            <div className="flex">
              <p className="text-slate-100 flex-1">VAT: </p>
              <p className="text-slate-100 flex-1">
                {((cost * 15) / 100).toFixed(2)}
              </p>
            </div>
            <div className="flex">
              <p className="text-slate-100 flex-1">Total: </p>
              <p className="text-slate-100 flex-1">
                {(cost + (cost * 15) / 100).toFixed(2)}
              </p>
            </div>
          </div>
          <hr />

          {isExceedQuantity || items?.length === 0 ? (
            <Button
              disabled
              className="w-full bg-[#DDA15E] text-[white] h-12 mt-8 "
            >
              Proceed to Checkout
            </Button>
          ) : (
            <Button
              onClick={() => {
                if (!token) {
                  toast.error("You need login first");
                  navigate("/login");
                } else navigate("/place-order");
              }}
              className="w-full bg-[#283618] text-[white] h-12 mt-8"
            >
              Proceed to Checkout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
