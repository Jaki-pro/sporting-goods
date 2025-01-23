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
import { toast } from "sonner";

const ManageProducts = () => {
  const [deletProduct] = useDeleteProductMutation();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllProductsQuery({ limit: 200 });
  if (isLoading) return <p>loading..</p>;
  const handleDeleteProduct = async (id: string) => {
    try {
      await deletProduct(id);
      toast.success("Product deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete product!");
    }
    dispatch(removeFromCart(id));
  };
  const products = data?.data;
  return (
    <div className="p-12">
      <h1 className="text-center p-4 font-bold text-4xl font-serif tracking-widest border-b-4 border-amber-950">
        Manage Product Dashboard
      </h1>
      <div className=" flex justify-end items-center m-4">
        <NavLink to={`/add-product`}>
          <Button className="bg-[#001529] text-[white] p-5">
            ADD PRODUCT
            <AppstoreAddOutlined />
          </Button>
        </NavLink>
      </div>
      <div className="mx-4 space-y-3">
        {products?.map((product: TProduct) => (
          <div
            key={product._id}
            className="bg-white rounded-md flex   items-center p-3 border"
          >
            <div className="md:mr-8 mr-4 flex-1">
              <div className="flex  justify-around items-center">
                <img
                  src={product.image}
                  className="lg:size-24 md:size-16 size-8 rounded-lg"
                  alt=""
                />
                <h4 className="text-lg font-semibold">{product.name}</h4>
              </div>
            </div>
            <div className="flex-1 sm:flex gap-4">
              <p className="flex-1">{product.category}</p>
              {/* <p>Time</p> */}
              <p className="flex-1">Price: {product.price}$</p>
            </div>
            <div className="flex sm:flex-row flex-col gap-2">
              <NavLink to={`/products/update-product/${product._id}`}>
                <Button type="primary" ghost>
                  Edit
                  <EditOutlined></EditOutlined>
                </Button>
              </NavLink>

              <Button
                onClick={() => handleDeleteProduct(product._id)}
                type="primary"
                danger
                className=""
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
