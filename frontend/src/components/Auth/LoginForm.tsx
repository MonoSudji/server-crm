import React from "react";
import { Form, Input, Button, theme } from "antd";
import { Link } from "react-router-dom";
import { login } from "../../store/reducers/auth/authSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IUser } from "../../models/user-model";


const LoginForm: React.FC = () => {
    const {token} = theme.useToken();
    const dispatch = useAppDispatch();

    const onFinish = async (data: IUser) => {
        await dispatch(login(data));
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
                <h2 className="text-2xl font-bold text-center mb-6">Войти</h2>

                <Form.Item
                    name="email"
                    label="Электронная почта"
                    rules={[
                        { required: true, message: "Пожалуйста, введите вашу электронную почту!" },
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="Введите вашу электронную почту"
                        className="border rounded px-3 py-2 w-full"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: "Пожалуйста, введите ваш пароль!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Введите ваш пароль"
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
                        Войти
                    </Button>
                </Form.Item>

                <p className="text-center">
                    Нет аккаунта?{" "}
                    <Link to="/registration" className="text-blue-600">
                        Зарегистрироваться
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default LoginForm;
