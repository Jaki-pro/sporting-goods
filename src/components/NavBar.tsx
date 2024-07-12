import { ShoppingCartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { NavLink } from "react-router-dom";
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
    endpoint: "add-product",
    name: "Add Product",
  },
  {
    endpoint: "about",
    name: "About",
  },
  {
    endpoint: "contact",
    name: "Contact",
  },
  {
    endpoint: "cart",
    name: "Cart",
  },
];
const items = menuItems.map((item, index) => ({
  key: index,
  label: (
    <NavLink to={`/${item.endpoint}`} className="mx-8">
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
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
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
