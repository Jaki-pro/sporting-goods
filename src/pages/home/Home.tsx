import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { TProduct } from "../products/product.const";
import { NavLink } from "react-router-dom";
import { Button, Card, Rate } from "antd";
import Contact from "../Contact";

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery(
    { limit: 8, page: 1 },
    { pollingInterval: 30000 }
  );
  if (isLoading) return <p>loading..</p>;
  const products = data?.data;
  return (
    <div>
      <h1 className="text-center text-white p-4 pt-16 mb-16 font-bold text-4xl font-serif tracking-widest border-b-2 border-[#606C38]">
        Latest Sporting Collection
      </h1>
      <div className="flex flex-wrap mb-12 gap-6 justify-center">
        {products?.map((product: TProduct) => (
          <Card
            style={{
              width: 275,
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              background: "#606C38",
            }}
            key={product._id}
            cover={
              <img
                alt="example"
                className="size-48 p-2 rounded-t-lg object-cover"
                src={product.image}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
            }
            className="hover:scale-105 hover:shadow-xl"
            actions={[
              <NavLink to={`/products/${product._id}`}>
                <Button className="bg-gradient-to-r from-[#001529] to-[#1890ff] p-4 text-[white] text-lg w-full rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  Explore
                </Button>
              </NavLink>,
              // <EditOutlined key="edit" />,
            ]}
          >
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">
                {product.name}
              </h3>
              <h3 className="text-lg font-semibold text-[#1890ff]">
                Price: BDT {product.price}
              </h3>
            </div>
            <hr />

            <hr />
            <div className="flex justify-between items-center mt-4 text-[16px]">
              <Rate
                className="mt-2 text-yellow-500"
                disabled
                defaultValue={product.rating}
              />
              <p className="text-lg font-medium text-gray-800">
                Stock: {product.stock}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Home;
