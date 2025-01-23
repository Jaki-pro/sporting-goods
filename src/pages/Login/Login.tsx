import React, { useState } from "react";
import { Button, Form, Input, Typography, Row, Col, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";
import { setUser } from "../../redux/features/auth/authSlice";
const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const toastId = toast.loading("logging in");
    try {
      const res = await login(values).unwrap();
      //console.log(res);
      console.log(res);
      const token = res.data.accessToken;
      const user = jwtDecode(token);
      const userInfo = {
        user,
        token,
      };
      dispatch(setUser(userInfo));
      toast.success("user logged in successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/`); // if user logged in successful then redirect to dashboard
    } catch (err) {
      console.log(err?.data?.message);
      setErrorMessage(err?.data?.message);
      toast.error(errorMessage, { id: toastId, duration: 2000 });
    }
    // Simulate login success
    //navigate("/dashboard");
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
                <a href="/signup" style={{ color: "#f6ad55" }}>
                  Create Account
                </a>
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
