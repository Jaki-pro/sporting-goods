import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../redux/features/products/productApi";
import { TProduct } from "../products/product.const";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux/features/cart/cartSlice";
import { AppstoreAddOutlined, EditOutlined } from "@ant-design/icons";

const ManageProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const [deletProduct] = useDeleteProductMutation();
  const dispatch = useAppDispatch();
  if (isLoading) return <p>loading..</p>;
  const handleDeleteProduct = (id: string) => {
    deletProduct(id);
    dispatch(removeFromCart(id));
  };
  const products = data?.data;
  return (
    <div className="pt-12">
      <h1 className="text-center p-4 font-bold text-4xl font-serif tracking-widest border-b-4 border-amber-950">
        Manage Product Dashboard
      </h1>
      <div className=" flex justify-end items-center m-4">
        <NavLink to={`/add-product`}>
          <Button className="bg-[#001529] text-[white] p-6">
            ADD PRODUCT
            <AppstoreAddOutlined />
          </Button>
        </NavLink>
      </div>
      <div className="mx-4 space-y-3">
        {products?.map((product: TProduct) => (
          <div
            key={product._id}
            className="bg-white rounded-md flex items-center p-3 border"
          >
            <div className="md:mr-8 mr-4">
              <img
                src={product.image}
                className="md:size-16 size-8 rounded-lg"
                alt=""
              />
            </div>
            <p className="flex-1">{product.name}</p>
            <p className="flex-1">{product.category}</p>
            {/* <p>Time</p> */}
            <p className="flex-1">Price: {product.price}$</p>
            <NavLink to={`/products/update-product/${product._id}`}>
              <Button type="primary" ghost>
                Edit
                <EditOutlined></EditOutlined>
              </Button>
            </NavLink>
            ,
            <Button
              onClick={() => handleDeleteProduct(product._id)}
              type="primary"
              danger
              className="ml-4"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
