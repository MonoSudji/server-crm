import React from "react";
import LoginForm from "../components/Auth/LoginForm";


const LoginPage: React.FC = () => {
    return (
        <div>
            <div className="p-[50px]">
                <div className="w-[100%]">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
