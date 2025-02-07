/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import {
  useDeleteCustomerMutation,
  useGetAllCustomerQuery,
} from "../../redux/features/customer/customerApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
const ManageUsers = () => {
  const { data, isLoading } = useGetAllCustomerQuery({});
  const { user } = useAppSelector((state) => state.auth);
  const [deleteCustomer] = useDeleteCustomerMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.role === "customer") {
      navigate("/not-found");
    }
  }, [user, navigate]);
  if (isLoading) return <p>loading..</p>;

  const handleDeleteUser = async (id: string) => {
    console.log(id);
    try {
      await deleteCustomer(id);
      toast.success("User deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete user!");
    }
  };
  console.log(data);
  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      render: (record: any) => `${record.firstName} ${record.lastName}`,
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", key: "role", render: () => "Customer" },
    {
      title: "Actions",
      render: (user: any) => (
        <Button
          onClick={() => handleDeleteUser(user?._id)}
          type="primary"
          danger
        >
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  return (
    <div className="p-12">
      <h1 className="text-center text-white p-4 font-bold text-3xl border-b-4 border-[#606C38]">
        Manage Users
      </h1>
      <Table
        columns={columns}
        dataSource={data?.data}
        rowKey="_id"
        className="mt-6"
        rowClassName={() => "bg-[#606C38] text-white  hover:text-black"}
      />
    </div>
  );
};

export default ManageUsers;
