import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { theme } from "antd";

interface ValuesI {
    email: string;
    password: string;
    confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
    const { token } = theme.useToken();
    const form = Form.useForm()
    
    const onFinish = (values: ValuesI) => {
        
    };

    return (
        <div className="flex justify-center">
            <Form
                form={form[0]}
                style={{backgroundColor: token.colorBgBase}} 
                name="register"
                layout="vertical"
                className="p-6 shadow-lg rounded-lg w-full max-w-md"
                onFinish={onFinish}
            >
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

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
                            required: true, message: "Please enter your password!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your password"
                        className="border rounded px-3 py-2 w-full"
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    rules={[
                        {   
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("Passwords do not match!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder="Confirm your password"
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
                        Register
                    </Button>
                </Form.Item>
                <p className="text-center">
                    Do you have account?{" "}
                    <Link to="/login" className="text-blue-600">
                        Sign in
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default RegistrationForm;
