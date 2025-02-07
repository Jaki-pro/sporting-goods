/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Form, Input, Typography, Row, Col, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";
import { setUser } from "../../redux/features/auth/authSlice";
const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(values).unwrap();
      console.log(res);
      const token = res.data.accessToken;
      const user = jwtDecode(token);
      const userInfo = {
        user,
        token,
      };
      dispatch(setUser(userInfo));
      toast.success("User logged in successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/`);
    } catch (err: any) {
      console.log(err?.data?.message);
      setErrorMessage(err?.data?.message);
      toast.error(errorMessage || "Login failed", {
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
        background: "linear-gradient(135deg, #f1f1f1 0%, #d6c7be 100%)",
      }}
    >
      <Row justify="center" align="middle" style={{ width: "100%" }}>
        <Col xs={22} sm={18} md={12} lg={8}>
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              padding: "24px",
              background: "#fff",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <Title level={3} style={{ marginBottom: "5px" }}>
                Welcome Back
              </Title>
              <Text style={{ color: "gray" }}>Login to your account</Text>
            </div>
            <Form
              name="login"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              initialValues={{
                email: "admin@gmail.com", // Default email
                password: "123456", // Default password
              }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
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
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Enter your password"
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
                  Login
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
                <a href="/forgot-password" style={{ color: "#f6ad55" }}>
                  Forgot Password?
                </a>
              </Text>
              <Text>
                New User?{" "}
                <Link to="/signup" style={{ color: "#f6ad55" }}>
                  Create Account
                </Link>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
