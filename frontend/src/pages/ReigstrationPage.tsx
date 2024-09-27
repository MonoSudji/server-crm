import React from "react";
import { Layout } from "antd";
import RegistrationForm from "../components/Auth/RegistrationForm";

const { Content } = Layout;

const RegistrationPage: React.FC = () => {
    return (
        <Layout >
            <Content className="p-[30px]">
                <div className="w-full">
                    <RegistrationForm />
                </div>
            </Content>
        </Layout>
    );
};

export default RegistrationPage;
