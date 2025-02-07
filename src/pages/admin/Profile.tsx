import { useAppSelector } from "../../redux/hooks";
import { Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "customer") {
      navigate("/not-found");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-[#283618] p-12 flex items-center justify-center">
      <div className="bg-gradient-to-r from-[#606C38] to-[#606C38] p-8 rounded-3xl shadow-xl max-w-xl w-full">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center text-white">
          <h2 className="text-3xl font-semibold mb-2">{user?.email}</h2>
          <p className="text-lg mb-4">{user?.role}</p>
          <div className="bg-[#283618] p-6 rounded-lg mb-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
            <p className="mb-2">Email: {user?.email}</p>
            <p className="mb-4">Role: {user?.role}</p>
            <Button
              disabled={true}
              type="primary"
              className="mt-4 flex items-center justify-center px-6 py-3 rounded-full shadow-lg bg-green-500 hover:bg-green-700 transition-colors"
            >
              Edit Profile <SettingOutlined className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
