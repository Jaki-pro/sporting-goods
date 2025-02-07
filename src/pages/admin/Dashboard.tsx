import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "antd";
import {
  AppstoreAddOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.role === "customer") {
      navigate("/not-found");
    }
  }, [user, navigate]); // Run effect when `user` changes

  return (
    <div className="p-12">
      <h1 className="text-center text-white p-4 font-bold text-4xl font-serif tracking-widest border-b-4 border-[#606C38]">
        Admin Dashboard
      </h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <NavLink to="/admin/manage-products">
          <Button className="w-full p-6 text-xl bg-[#001529] text-white">
            Manage Products <AppstoreAddOutlined />
          </Button>
        </NavLink>

        <NavLink to="/admin/manage-users">
          <Button className="w-full p-6 text-xl bg-[#001529] text-white">
            Manage Users <UserOutlined />
          </Button>
        </NavLink>

        <NavLink to="/admin/manage-admins">
          <Button className="w-full p-6 text-xl bg-[#001529] text-white">
            Manage Admins <UserOutlined />
          </Button>
        </NavLink>

        <NavLink to="/admin/profile">
          <Button className="w-full p-6 text-xl bg-[#001529] text-white">
            My Profile <SettingOutlined />
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
