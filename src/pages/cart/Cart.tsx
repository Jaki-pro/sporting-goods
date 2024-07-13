import { Button } from "antd";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  TCartItem,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

const Cart = ({ item }: { item: TCartItem }) => {
  const dispatch = useAppDispatch();
  const price = item.price * item.quantity;
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3 border">
      <Button
        onClick={() => dispatch(removeFromCart(item?.productId))}
        type="primary"
        danger
        className="md:mr-16 sm:mr-8 mr-4"
      >
        X
      </Button>
      <div className="flex-1">
        <div>
          <img src={item.image} className="size-12 rounded-full" alt="" />
        </div>
        <p>{item.name}</p>
      </div>

      {/* <p>Time</p> */}
      <div className="flex-1 flex items-center gap-2">
        <p>Price: {price.toFixed(2)}$</p>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() => dispatch(decreaseQuantity(item?.productId))}
          className=""
        >
          -
        </Button>
        <p>{item.quantity}</p>
        <Button
          onClick={() => dispatch(increaseQuantity(item?.productId))}
          danger
          className=""
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Cart;
