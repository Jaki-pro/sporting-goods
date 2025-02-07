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
import Success from "../pages/Success";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFoundPage from "../pages/notfound/NotFoundPage";
import Dashboard from "../pages/admin/Dashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageAdmins from "../pages/admin/ManageAdmins";
import Profile from "../pages/admin/Profile";
import ManageProducts from "../pages/admin/ManageProducts";
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
            `https://express-mongo-server.vercel.app/api/v1/products/${params.id}`
          ),
      },
      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/admin/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/admin/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/admin/manage-admins",
        element: <ManageAdmins />,
      },
      {
        path: "/admin/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
export default router;
