import { useState } from 'react';
import { Avatar, Button, Card, Form, Input, Radio, Select, Upload } from 'antd';
import { LockOutlined, MailOutlined, CalendarOutlined, UploadOutlined } from '@ant-design/icons';


const { Option } = Select;

const SettingsCard = () => {
    const [theme, setTheme] = useState('dark');
    const [panelTransparency, setPanelTransparency] = useState('transparent');
    const [language, setLanguage] = useState('Русский');
  
    return (
        <div className="rounded-lg p-0 shadow-lg w-[50%] ">
            <Card
                className=" text-white p-0  h-[100%]"
                title="Внешний вид системы"
                bordered={false}
            >
                <div className="mb-4">
                <span className="block mb-2">Выберите цветовую схему:</span>
                    <Radio.Group
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="space-x-4"
                    >
                        <Radio.Button value="dark" className="text-white">
                        🌙
                        </Radio.Button>
                        <Radio.Button value="light" className="bg-gray-200">
                        ☀️
                        </Radio.Button>
                    </Radio.Group>
                </div>
        
                <div className="mb-4">
                    <span className="block mb-2">Левая и верхняя панель:</span>
                    <Select
                        value={panelTransparency}
                        onChange={setPanelTransparency}
                        className="w-full text-white"
                    >
                        <Option value="transparent">Полупрозрачная</Option>
                        <Option value="solid">Непрозрачная</Option>
                    </Select>
                </div>
        
                <div className="mb-4">
                    <span className="block mb-2">Язык интерфейса:</span>
                    <Select
                        value={language}
                        onChange={setLanguage}
                        className="w-full text-white"
                    >
                        <Option value="Русский">Русский</Option>
                        <Option value="English">English</Option>
                    </Select>
                </div>
        
                <div className="mb-4">
                    <span className="block mb-2">Выберите фон досок:</span>
                    <div className="flex flex-col">
                        <Button type="primary">
                            Загрузить свой фон
                        </Button>
                        <Input.Search
                        placeholder="Поиск среди миллиона картинок"
                        enterButton="Найти"
                        className="text-white mt-3"
                        />
                    </div>
                </div>
        
                <div className="mb-4">
                    <Upload>
                        <Button icon={<UploadOutlined />}>Загрузить изображение</Button>
                    </Upload>
                </div>
                
                <div className="flex flex-wrap gap-2">
                <div className="w-20 h-20 bg-green-500"></div>
                <div className="w-20 h-20 bg-blue-500"></div>
                <div className="w-20 h-20 bg-red-500"></div>
                <div className="w-20 h-20 bg-yellow-500"></div>
                </div>
            </Card>
        </div>
      
    );
  };


  const UserCard = () => {
    return (
      <Card
        title="Профиль "
        className="w-[30%] mr-10 text-white rounded-lg shadow-lg"
        bordered={false}
      >
        <div className="text-center mb-6">
          <Avatar size={96} className="bg-green-400">MB</Avatar>
          <div className="mt-2">
            <Button type="link" className="text-blue-400">Загрузить фото</Button>
            <Button type="link" className="text-red-400">Удалить фото</Button>
          </div>
        </div>
  
        <Form layout="vertical" className="w-full flex flex-col items-center">
          <Form.Item
            rules={[
              { required: true, message: 'Пожалуйста, введите имя!' }
            ]}
            className="w-[80%]"
          >
            <Input defaultValue="USERNAME" />
          </Form.Item>
  
          <Form.Item className="w-[80%]">
            <Button type="link" icon={<LockOutlined />} className="text-blue-400">
              Сменить пароль
            </Button>
          </Form.Item>
  
          <Form.Item className="w-[80%]">
            <Button type="link" icon={<MailOutlined />} className="text-blue-400">
              Сменить e-mail
            </Button>
          </Form.Item>
  
          <Form.Item className="w-[80%]">
            <Button type="link" className="text-blue-400">
              Настройки e-mail оповещений
            </Button>
          </Form.Item>
  
          <Form.Item className="w-[80%]">
            <Button type="link" icon={<CalendarOutlined />} className="text-blue-400">
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
    );
  };



const ProfileCard = () => {
    return (
        <div className='flex flex-row justify-center p-10'>
            <UserCard />
            <SettingsCard />
        </div>
    )
};

export default ProfileCard;
