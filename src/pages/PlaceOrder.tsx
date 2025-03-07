import { Button, Row } from "antd";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { usePlaceOrderMutation } from "../redux/features/orders/orderApi";
import { clearCart } from "../redux/features/cart/cartSlice";
import { ObjectId } from "bson";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type TPlaceOrderItem = {
  productId: ObjectId; // MongoDB ObjectId as a string
  title: string;
  customerName: string;
  customerEmail: string;
  customerNumber: string;
  customerAddress: string;
  price: number;
  quantity: number;
  subTotalPrice: number;
  vat: number;
  totalPrice: number;
};

const PlaceOrder = () => {
  const methods = useForm();
  const { items } = useAppSelector((state) => state.cart);
  const [placeOrder] = usePlaceOrderMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cost = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const onSubmit = async (data: FieldValues) => {
    for (const item of items) {
      const newItem: TPlaceOrderItem = {
        productId: item.productId,
        title: item.name,
        customerName: data.name,
        customerAddress: data.address,
        customerEmail: data.email,
        customerNumber: data.number,
        price: item.price,
        quantity: item.quantity,
        subTotalPrice: (cost * 15) / 100,
        vat: (cost * 15) / 100,
        totalPrice: (cost * 15) / 100,
      };
      console.log(newItem);
      await placeOrder(newItem);
    }
    dispatch(clearCart());
    toast.success("Order placed successfully", { duration: 2000 });
    navigate("/success");
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ width: "100%", height: "100vh" }}
    >
      <div className="border-4 border-dashed  bg-[#606C38] border-[#606C38] p-8 rounded-lg shadow-lg w-full max-w-xl">
        <FormProvider {...methods}>
          {/** Main part of Form */}
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="text-[white]"
          >
            <h1 className="text-3xl font-bold text-[#ffffff] text-center mb-8">
              Order Placement
            </h1>
            <div className="grid md:grid-cols-2 md:gap-4">
              <CustomInput
                isRequired={true}
                name="name"
                type="text"
                label="Name"
              />
              <CustomInput name="email" type="email" label="Email" />
              <CustomInput name="number" type="text" label="Number" />
              <CustomInput name="address" type="text" label="Address" />
            </div>
            <Button
              className="w-full bg-[#283618] text-white h-12 mt-8"
              style={{ width: "100%" }}
              htmlType="submit"
            >
              Place Order
            </Button>
            <p className="text-2xl text-center p-4 font-bold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500">
              ✨ Payment method is coming soon! ✨
            </p>
          </form>
        </FormProvider>
      </div>
    </Row>
  );
};

export default PlaceOrder;
