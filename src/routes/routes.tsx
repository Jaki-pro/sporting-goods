import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/products/Products";
import AddProduct from "../pages/AddProduct";
import SingleProduct from "../pages/products/SingleProduct";
import CartItems from "../pages/cart/CartItems";
import UpdateProduct from "../pages/products/UpdateProduct";
import PlaceOrder from "../pages/PlaceOrder";
import ManageProducts from "../pages/manageProducts/ManageProducts";
import Success from "../pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
      {
        path: "/products/update-product/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(
            `https://express-mongo-server-jakaria-hossains-projects.vercel.app/api/v1/products/${params.id}`
          ),
      },
      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
      {
        path: "/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);
export default router;
