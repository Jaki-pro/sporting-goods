/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Button, Modal, Form, Input } from "antd"; // Added Modal and Form
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import {
  useDeleteAdminMutation,
  useGetAllAdminQuery,
  useAddAdminMutation, // A hypothetical hook for adding admin
} from "../../redux/features/admin/adminApi";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ManageAdmins = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isLoading } = useGetAllAdminQuery({});
  const [deleteAdmin] = useDeleteAdminMutation();
  const [addAdmin, { isLoading: addingAdmin }] = useAddAdminMutation(); // Track loading state
  const [visible, setVisible] = useState(false); // State for modal visibility
  const navigate = useNavigate();
  const [form] = Form.useForm(); // Form instance

  useEffect(() => {
    if (user && user.role === "customer") {
      navigate("/not-found");
    }
  }, [user, navigate]);

  if (isLoading) return <p>Loading...</p>;

  const handleDeleteAdmin = async (id: string, email: string) => {
    console.log(id, email);
    if (email === "admin@gmail.com") {
      toast.error("Super Admin cannot be deleted");
      return;
    }

    try {
      await deleteAdmin(id).unwrap();
      toast.success("Admin removed successfully!");
    } catch (err) {
      toast.error("Failed to remove admin!");
    }
  };

  const handleAddAdmin = async (values: any) => {
    const newAdmin: {
      name: {
        firstName: string;
        lastName: string;
      };
      email: string;
      password: string;
      role: string;
    } = {
      name: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
      email: values.email,
      password: values.password,
      role: "admin",
    };
    try {
      await addAdmin(newAdmin).unwrap();
      toast.success("Admin added successfully!");
      setVisible(false); // Close modal
      form.resetFields(); // Reset form fields
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (record: any) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    { title: "Role", key: "role", render: () => "Admin" },
    {
      title: "Actions",
      render: (admin: any) => (
        <Button
          disabled={admin?.email === "admin@gmail.com"}
          onClick={() => handleDeleteAdmin(admin?._id, admin?.email)}
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
        Manage Admins
      </h1>

      <div className="flex justify-end mb-4">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setVisible(true)}
          className="bg-green-500 hover:bg-green-600 border-none"
        >
          Add Admin
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data?.data}
        rowKey="_id"
        className="mt-6"
        rowClassName={() => "bg-[#606C38] text-white hover:text-black"}
      />

      <Modal
        title="Add New Admin"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleAddAdmin} form={form}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please input the first name!" },
            ]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please input the last name!" }]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input the password!" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={addingAdmin}
              className="w-full"
            >
              {addingAdmin ? "Adding..." : "Add Admin"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageAdmins;
