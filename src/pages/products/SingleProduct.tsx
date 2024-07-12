import { NavLink, Params, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/productApi";
import { ObjectId } from "bson";
import { Button, Card, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import {
  CarryOutOutlined,
  CarTwoTone,
  EditOutlined,
  FileAddTwoTone,
  OrderedListOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleProduct = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleProductQuery(params.id);
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  if (isLoading) return <p>loading..</p>;
  const product = data?.data;
  const newProduct = {
    productId: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
    brand: product.brand,
    stock: product.stock,
    quantity: 1,
  };
  let noProductLeft = false;
  const isExist = items.find((item) => item.productId === product._id);
  if (isExist && isExist.quantity >= product.stock) {
    noProductLeft = true;
  }
  return (
    <>
      {noProductLeft ? (
        <Card
          style={{ width: 500 }}
          cover={
            <img alt="example" className="size-96 p-2" src={product.image} />
          }
          className="mx-auto"
          actions={[
            // <EditOutlined key="edit" />,
            <NavLink to={`/products/update-product/${product._id}`}>
              <Button type="primary" ghost>
                Edit
                <EditOutlined></EditOutlined>
              </Button>
            </NavLink>,
            <Button
              disabled
              onClick={() => dispatch(addToCart(newProduct))}
              className="bg-[#001529] text-[white]"
            >
              Add to Cart
              <ShoppingCartOutlined />
            </Button>,
          ]}
        >
          <Meta title={product.name} description={product.description} />
        </Card>
      ) : (
        <Card
          style={{ width: 500 }}
          cover={
            <img alt="example" className="size-96 p-2" src={product.image} />
          }
          className="mx-auto"
          actions={[
            // <EditOutlined key="edit" />,
            <NavLink to={`/products/update-product/${product._id}`}>
              <Button type="primary" ghost>
                Edit
                <EditOutlined></EditOutlined>
              </Button>
            </NavLink>,
            <Button
              onClick={() => dispatch(addToCart(newProduct))}
              className="bg-[#001529] text-[white]"
            >
              Add to Cart
              <ShoppingCartOutlined />
            </Button>,
          ]}
        >
          <div className="flex gap-6 justify-between mb-4">
            <Meta title={product.name} description={product.brand} />
            <p>{product.description}</p>
          </div>
          <hr />
          <div className="flex gap-4 mt-4 justify-between">
            <label className="text-lg">Price: {product.price} $</label>
            <br />
            <label className="text-lg">
              reviews: <Rate disabled defaultValue={product.rating} />
            </label>
          </div>
        </Card>
      )}
    </>
  );
};

export default SingleProduct;
