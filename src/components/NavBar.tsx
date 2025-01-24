import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { Badge, Menu, Button, Drawer, Grid, Tooltip } from "antd";
import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";

const { useBreakpoint } = Grid;

const NavBar = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [cartCount, setCartCount] = useState(cartItems.length);
  useEffect(() => {
    let sum = 0;
    for (const val of cartItems) sum += val.quantity;
    setCartCount(sum);
  }, [cartItems]);
  // Navebar iteraton
  //console.log(cartItems.length);
  console.log("user", user);
  const menuItems = [
    { endpoint: "admin", name: "Admin" },
    { endpoint: "", name: "Home" },
    { endpoint: "products", name: "Products" },
    { endpoint: "about", name: "About Us" },
    { endpoint: "cart", name: "Cart" },
    user
      ? { endpoint: "logout", name: "Logout" }
      : { endpoint: "login", name: "Login" },
  ];
  if (user?.role !== "admin") menuItems.shift();
  const items = menuItems.map((item, index) => {
    return {
      key: index,
      label: (
        <NavLink
          to={`/${item.endpoint !== "logout" ? item.endpoint : ""}`}
          onClick={() => {
            if (item.endpoint === "logout") {
              dispatch(logout());
            }
          }}
          className="mx-8 text-lg font-semibold text-white hover:text-white transition-transform transform hover:scale-105"
        >
          {item.name}
          {item.endpoint === "cart" && (
            <Badge count={cartCount} size="small" offset={[10, 0]}>
              <ShoppingCartOutlined
                style={{
                  marginLeft: 8,
                  fontSize: "20px",
                  color: "white",
                  transition: "color 0.3s ease",
                }}
              />
            </Badge>
          )}
        </NavLink>
      ),
    };
  });
  // Navbar iteration

  console.log(user);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  // Close Drawer when switching back to large screen
  useEffect(() => {
    if (screens.lg) {
      setDrawerVisible(false);
    }
  }, [screens.lg]);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

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
          justifyContent: "flex-start", // Adjusted this to keep items aligned
          background: "linear-gradient(90deg, #00203FFF,rgb(85, 127, 146))",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          padding: "0 16px", // Reduced padding for smaller space
        }}
      >
        <NavLink to="/" style={{ margin: 0 }}>
          <Logo />
        </NavLink>

        {/* Show Menu Items Directly on Large Screens */}
        {screens.lg ? (
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              fontSize: "18px",
              background: "transparent",
              borderBottom: "none",
              display: "flex",
              justifyContent: "flex-start", // Align menu items next to the logo
            }}
            // Force white text color for the Menu items
            className="text-white"
          />
        ) : (
          // Show Drawer Toggle Button on Small Screens
          <Tooltip title="Menu">
            <Button
              icon={<MenuOutlined />}
              type="primary"
              shape="circle"
              style={{ marginLeft: "auto", marginRight: "16px" }}
              onClick={toggleDrawer}
            />
          </Tooltip>
        )}

        {/* Drawer for Small Screens */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={toggleDrawer}
          width={"50%"}
          open={drawerVisible}
          bodyStyle={{
            padding: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={[]}
            items={items}
            style={{
              fontSize: "18px",
              background:
                "linear-gradient(90deg, #00203FFF, rgb(85, 127, 146))",
              borderRight: "none",
              transition: "all 0.3s ease-in-out",
            }}
            // Force white text color for the Menu items
            className="text-white"
          />
        </Drawer>
      </Header>
    </div>
  );
};

export default NavBar;
