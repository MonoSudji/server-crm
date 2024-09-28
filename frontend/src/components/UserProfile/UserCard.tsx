import { Avatar, Button, Card, Form, Input, theme } from "antd";
import { LockOutlined, MailOutlined, CalendarOutlined } from "@ant-design/icons";

const UserCard = () => {
    const { token } = theme.useToken();
    return (
        <div className="rounded-lg shadow-lg w-[30%]">
            <Card
                style={{ backgroundColor: token.colorBgBase }}
                title="Профиль "
                className="w-[100%] text-white rounded-lg shadow-lg h-full "
                bordered={false}
            >
                <div className="text-center mb-6">
                    <Avatar size={96} className="bg-green-400">
                        MB
                    </Avatar>
                    <div className="mt-2">
                        <Button type="link" className="text-blue-400">
                            Загрузить фото
                        </Button>
                        <Button type="link" className="text-red-400">
                            Удалить фото
                        </Button>
                    </div>
                </div>

                <Form
                    layout="vertical"
                    className="w-full flex flex-col items-center"
                >
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите имя!",
                            },
                        ]}
                        className="w-[80%]"
                    >
                        <Input defaultValue="USERNAME" size="large"/>
                    </Form.Item>

                    <Form.Item className="w-[80%]">
                        <Button
                            type="link"
                            icon={<LockOutlined />}
                            className="text-blue-400"
                        >
                            Сменить пароль
                        </Button>
                    </Form.Item>

                    <Form.Item className="w-[80%]">
                        <Button
                            type="link"
                            icon={<MailOutlined />}
                            className="text-blue-400"
                        >
                            Сменить e-mail
                        </Button>
                    </Form.Item>

                    <Form.Item className="w-[80%]">
                        <Button type="link" className="text-blue-400">
                            Настройки e-mail оповещений
                        </Button>
                    </Form.Item>

                    <Form.Item className="w-[80%]">
                        <Button
                            type="link"
                            icon={<CalendarOutlined />}
                            className="text-blue-400"
                        >
                            Интеграция с Google-календарём
                        </Button>
                    </Form.Item>
                </Form>

                <div className="text-center">
                    <Button type="text" danger className="text-red-500">
                        Выйти из аккаунта
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default UserCard;