/* eslint-disable @typescript-eslint/no-explicit-any */
// import { NavLink, useParams } from "react-router-dom";
// import { useGetSingleProductQuery } from "../../redux/features/products/productApi";
// import { Button, Card, Rate } from "antd";
// import Meta from "antd/es/card/Meta";
// import { EditOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { addToCart } from "../../redux/features/cart/cartSlice";
// import { toast } from "sonner";

// const SingleProduct = () => {
//   const params = useParams();
//   const { data, isLoading } = useGetSingleProductQuery(params.id as string);
//   const dispatch = useAppDispatch();
//   const { items } = useAppSelector((state) => state.cart);
//   if (isLoading) return <p>loading..</p>;
//   const product = data?.data;
//   const newProduct = {
//     productId: product._id,
//     name: product.name,
//     price: product.price,
//     image: product.image,
//     brand: product.brand,
//     stock: product.stock,
//     quantity: 1,
//   };
//   let noProductLeft = false;
//   const isExist = items.find((item) => item.productId === product._id);
//   if (isExist && isExist.quantity >= product.stock) {
//     noProductLeft = true;
//   }
//   const handleAddToCart = () => {
//     dispatch(addToCart(newProduct));
//     toast.success("Product added into cart", { duration: 2000 });
//   };
//   return (
//     <div className="pt-16">
//       <h1 className="text-center p-4 pt-8 mb-16 font-bold text-4xl font-serif tracking-widest border-b-2 border-amber-950">
//         In Details of the product
//       </h1>
//       {noProductLeft ? (
//         <Card
//           style={{ width: 500 }}
//           cover={
//             <img alt="example" className="size-96 p-2" src={product.image} />
//           }
//           className="mx-auto"
//           actions={[
//             // <EditOutlined key="edit" />,
//             <NavLink to={`/products/update-product/${product._id}`}>
//               <Button
//                 className="bg-[#001529] p-6 text-[white] text-xl"
//                 type="primary"
//                 ghost
//               >
//                 Edit
//                 <EditOutlined></EditOutlined>
//               </Button>
//             </NavLink>,
//             <Button disabled className="bg-[#001529] p-6 text-[white] text-xl">
//               Add to Cart
//               <ShoppingCartOutlined />
//             </Button>,
//           ]}
//         >
//           <div className=" mb-4">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-3xl font-semibold">{product.name}</h2>
//               <Meta className="text-xl" description={product.brand} />
//             </div>
//             <p className="text-lg">{product.description}</p>
//           </div>
//           <hr />
//           <div className="flex gap-4 mt-4 justify-between mb-4">
//             <label className="text-xl">Stock: {product.stock} $</label>
//             <br />
//             <label className="text-lg">Category: {product.category}</label>
//           </div>
//           <hr />
//           <div className="flex gap-4 mt-4 justify-between">
//             <label className="text-xl">Price: {product.price} $</label>
//             <br />
//             <label className="text-lg">
//               reviews: <Rate disabled defaultValue={product.rating} />
//             </label>
//           </div>
//         </Card>
//       ) : (
//         <Card
//           style={{ width: 500 }}
//           cover={
//             <img alt="example" className="size-96 p-2" src={product.image} />
//           }
//           className="mx-auto p-2"
//           actions={[
//             <Button
//               onClick={handleAddToCart}
//               className="bg-[#001529] p-6 w-full text-[white] text-xl"
//             >
//               Add to Cart
//               <ShoppingCartOutlined />
//             </Button>,
//           ]}
//         >
//           <div className=" mb-4">
//             <div className="flex justify-between mb-4">
//               <h2 className="text-2xl font-semibold">{product.name}</h2>
//               <Meta
//                 className="text-lg"
//                 description={`brand: ${product.brand}`}
//               />
//             </div>
//             <p className="text-lg">{product.description}</p>
//           </div>
//           <hr />
//           <div className="flex gap-4 mt-4 justify-between mb-4">
//             <label className="text-lg">Stock: {product.stock}</label>
//             <br />
//             <label className="text-lg">Category: {product.category}</label>
//           </div>
//           <hr />
//           <div className="flex gap-4 mt-4 justify-between">
//             <label className="text-lg">Price: {product.price} $</label>
//             <br />
//             <label className="text-lg">
//               reviews: <Rate disabled defaultValue={product.rating} />
//             </label>
//           </div>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default SingleProduct;

import { NavLink, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/productApi";
import { Button, Card, Rate, Row, Col, Carousel, Tooltip } from "antd";
import { EditOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "sonner";

const SingleProduct = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleProductQuery(params.id as string);
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  if (isLoading) return <p>Loading...</p>;

  const product = data?.data;

  // Use product images or fallback to random images from Lorem Picsum
  const productImages = product.images || [
    "https://picsum.photos/500/300?random=1",
    "https://picsum.photos/500/300?random=2",
    "https://picsum.photos/500/300?random=3",
  ];

  const newProduct = {
    productId: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
    brand: product.brand,
    stock: product.stock,
    quantity: 1,
  };

  const isExist = items.find((item) => item.productId === product._id);
  const noProductLeft = isExist && isExist.quantity >= product.stock;

  const handleAddToCart = () => {
    dispatch(addToCart(newProduct));
    toast.success("Product added to cart!", { duration: 2000 });
  };

  return (
    <div className="product-details-container pt-16">
      <Row className="p-4">
        <Col span={24} className="text-center">
          <h1 className="font-bold text-4xl mb-8 text-[white]">
            Product Details
          </h1>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {/* Product Image Gallery */}
        <Col xs={24} sm={12} md={10} lg={8}>
          <Card bordered={false} style={{ borderRadius: "8px" }}>
            <Carousel autoplay>
              {productImages.map((image: any, index: any) => (
                <div key={index}>
                  <img
                    alt={`Product Image ${index + 1}`}
                    src={image}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Card>
        </Col>

        {/* Product Info */}
        <Col xs={24} sm={12} md={14} lg={12}>
          <Card bordered={false}>
            <div className="product-info">
              <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="mb-4">
                <p className="text-lg">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="text-lg">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="text-lg">
                  <strong>Stock:</strong>{" "}
                  {product.stock > 0 ? product.stock : "Out of stock"}
                </p>
                <p className="text-lg">
                  <strong>Price:</strong> {product.price}
                </p>
                <Rate disabled defaultValue={product.rating} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-actions mt-4 flex gap-4">
              <Button
                type="primary"
                className="w-full"
                disabled={noProductLeft || product.stock === 0}
                onClick={handleAddToCart}
                style={{
                  backgroundColor: "#606C38",
                  borderColor: "#1a73e8",
                  color: "#fff",
                }}
              >
                Add to Cart <ShoppingCartOutlined />
              </Button>
              <Tooltip title="Edit this product">
                <NavLink to={`/products/update-product/${product._id}`}>
                  <Button type="dashed" icon={<EditOutlined />} />
                </NavLink>
              </Tooltip>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SingleProduct;
