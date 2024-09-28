import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { theme } from "antd";
import { AuthRequestI } from "../../models/user-model";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../store/reducers/auth/authSlice";

interface IRegistrationForm extends AuthRequestI{
    confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
    const { token } = theme.useToken();
    const form = Form.useForm();
    const dispatch = useAppDispatch();
    
    const onFinish = async ({password, confirmPassword, email, username}: IRegistrationForm) => {
        if (password === confirmPassword) {
            const data: AuthRequestI = {email, username, password};
            await dispatch(login(data));
        }
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
                <h2 className="text-2xl font-bold text-center mb-6">Регистрация</h2>

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
                    name="username"
                    label="Имя пользователя"
                    rules={[
                        { required: true, message: "Пожалуйста, введите имя пользователя!" },
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="Введите имя пользователя"
                        className="border rounded px-3 py-2 w-full"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true, message: "Пожалуйста, введите ваш пароль!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Введите ваш пароль"
                        className="border rounded px-3 py-2 w-full"
                    />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Подтвердите пароль"
                    rules={[
                        {   
                            required: true,
                            message: "Пожалуйста, подтвердите ваш пароль!",
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
                                    new Error("Пароли не совпадают!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder="Подтвердите ваш пароль"
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
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                <p className="text-center">
                    Уже есть аккаунт?{" "}
                    <Link to="/login" className="text-blue-600">
                        Войти
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default RegistrationForm;
