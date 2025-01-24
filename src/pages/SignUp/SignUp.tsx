import React from "react";
import { Button, Form, Input, Typography, Row, Col, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAddCustomerMutation } from "../../redux/features/customer/customerApi";

const { Title, Text } = Typography;

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [addCustomer, { data, error }] = useAddCustomerMutation();

  const onFinish = async (values: any) => {
    //console.log("Success:", values);
    const customerData = {
      email: values.email,
      password: values.password,
      name: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
    };
    console.log(customerData);
    const toastId = toast.loading("Creating account...");
    try {
      // Simulate API call or perform account creation logic
      const customer = await addCustomer(customerData);
      //console.log("ok", customer);
      //console.log(customerData);
      if (customer?.error) throw new Error();
      toast.success("Account created successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/login`); // Redirect to login after successful account creation
    } catch (err) {
      //console.error("Error creating account:", err);
      toast.error("Failed to create account", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,rgb(249, 249, 249) 0%,rgb(205, 187, 181) 100%)",
      }}
    >
      <Row justify="center" align="middle" style={{ width: "100%" }}>
        <Col xs={22} sm={18} md={12} lg={8}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              padding: "24px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <Title level={3} style={{ marginBottom: "0px" }}>
                Create Account
              </Title>
              <Text style={{ color: "gray" }}>Join us today!</Text>
            </div>
            <Form
              name="createAccount"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your First Name!" },
                ]}
              >
                <Input placeholder="Enter your First Name" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your Last Name!" },
                ]}
              >
                <Input placeholder="Enter your Last Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your Email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters long!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Enter your Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#f6ad55",
                    borderColor: "#f6ad55",
                  }}
                >
                  Create Account
                </Button>
              </Form.Item>
            </Form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <Text>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#f6ad55" }}>
                  Login
                </Link>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
