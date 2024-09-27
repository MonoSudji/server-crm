import React from "react";
import RegistrationForm from "../components/Auth/RegistrationForm";


const RegistrationPage: React.FC = () => {
    return (
        <div >
            <div className="p-[30px]">
                <div className="w-full">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
