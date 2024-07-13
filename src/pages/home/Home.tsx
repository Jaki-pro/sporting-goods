import { useGetAllProductsQuery } from "../../redux/features/products/productApi";
import { TProduct } from "../products/product.const";
import { NavLink } from "react-router-dom";
import { Button, Card, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import Contact from "../Contact";

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery(
    { limit: 6, page: 1 },
    { pollingInterval: 30000 }
  );
  if (isLoading) return <p>loading..</p>;
  const products = data?.data;
  return (
    <div>
      <h1 className="text-center p-4 pt-16 mb-16 font-bold text-4xl font-serif tracking-widest border-b-2 border-amber-950">
        Latest Sporting Collection
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {products?.map((product: TProduct) => (
          <Card
            style={{ width: 400 }}
            key={product._id}
            cover={
              <img alt="example" className="size-72 p-2" src={product.image} />
            }
            className=""
            actions={[
              <NavLink to={`/products/${product._id}`}>
                <Button className="bg-[#001529] p-6 text-[white] text-xl w-full">
                  Explore
                </Button>
              </NavLink>,
              // <EditOutlined key="edit" />,
            ]}
          >
            <div className="flex justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold ">{product.name}</h2>
                <p className="text-xl text-[#a4acba]">{product.brand}</p>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">
                  Price: {product.price}
                </h3>
                <Meta
                  className="text-xl"
                  description={`category: ${product.category}`}
                />
              </div>
            </div>
            <hr />
            <div className="my-2">
              <p className="text-lg">{product.description.slice(0, 100)}...</p>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-4 text-[16px]">
              <Rate className="mt-2" disabled defaultValue={product.rating} />
              <p className="text-xl">stock: {product.stock}</p>
            </div>
          </Card>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Home;
