import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import { Content } from "antd/es/layout/layout";
import Layout from "antd/es/layout/layout";

const LoginPage: React.FC = () => {
    return (
        <Layout className="mt-20">
            <Content className="p-[50px]">
                <div className="w-[100%]">
                    <LoginForm />
                </div>
            </Content>
        </Layout>
    );
};

export default LoginPage;
