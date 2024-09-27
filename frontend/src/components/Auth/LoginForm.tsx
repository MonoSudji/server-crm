import React from "react";
import { Form, Input, Button, theme } from "antd";
import { Link } from "react-router-dom";

interface ValuesI {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const {token} = theme.useToken()

    const onFinish = ({ email, password }: ValuesI) => {
        console.log("Login form values: ", email, password);
    };

    return (
        <div className={`flex justify-center items-cente`}>
            <Form
                style={{backgroundColor: token.colorBgBase}} 
                name="login"
                layout="vertical"
                onFinish={onFinish}
                className="p-6 shadow-lg rounded-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: "Please enter your email!" },
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="border rounded px-3 py-2 w-full"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please enter your password!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your password"
                        className="border rounded px-3 py-2 w-full"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Sign in
                    </Button>
                </Form.Item>

                <p className="text-center">
                    Don’t have an account?{" "}
                    <Link to="/registration" className="text-blue-600">
                        Sign up
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default LoginForm;
