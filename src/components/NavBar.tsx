import { ShoppingCartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const menuItems = [
  {
    endpoint: "",
    name: "Home",
  },
  {
    endpoint: "products",
    name: "Products",
  },
  {
    endpoint: "manage-products",
    name: "Manage Products",
  },
  {
    endpoint: "about",
    name: "About Us",
  },
  {
    endpoint: "cart",
    name: "Cart",
  },
];
const items = menuItems.map((item, index) => ({
  key: index,
  label: (
    <NavLink to={`/${item.endpoint}`} className="mx-8 text-xl">
      {`${item.name} `}
      {item.endpoint === "cart" && (
        <ShoppingCartOutlined style={{ width: "20px" }} />
      )}
    </NavLink>
  ),
}));
const NavBar = () => {
  return (
    <div>
      <Header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Logo />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[]}
          items={items}
          className="flex justify-center  ]"
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: "18px",
          }}
        />
      </Header>
    </div>
  );
};

export default NavBar;
