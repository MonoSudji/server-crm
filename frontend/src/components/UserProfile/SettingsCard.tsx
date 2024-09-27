import { Card, Radio, Select, theme } from "antd";
import { Typography } from "antd";
import { setTheme } from "../../store/settings/settingsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setLanguage } from "../../store/settings/settingsSlice";
import { Menu}  from "antd";
import { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title } = Typography;

const items = [
    {
      key: 'sub1',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        { key: '1', label: 'Option 3' },
        { key: '2', label: 'Option 4' },
      ],
    },


  ];

const SettingsCard = () => {
    const language = useAppSelector((state) => state.settings.language);
    const themeIsDark = useAppSelector((state) => state.settings.themeIsDark);

    const [mode, setMode] = useState<'vertical' | 'inline'>('inline');

    // настройки темы
    const { token } = theme.useToken();
    const dispatch = useAppDispatch();

    // handlers
    const handleChangeThem = () => dispatch(setTheme());
    const handleChangeLanguage = (value: string) => dispatch(setLanguage(value));
    
    return (
        <div className="rounded-lg p-0 shadow-lg w-[50%]">
            <Card
                className=" text-white p-0  h-[100%]"
                title="Внешний вид системы"
                bordered={false}
                style={{ backgroundColor: token.colorBgBase }}
            >
                <div className="mb-4">
                    <span className="block mb-2">Выберите цветовую схему:</span>
                    <Radio.Group className="space-x-4">
                        <Radio.Button
                            value="dark"
                            onClick={handleChangeThem}
                            style={{
                                backgroundColor: themeIsDark
                                    ? "white"
                                    : "#1e2022",
                            }}
                        >
                            🌙
                        </Radio.Button>
                        <Radio.Button
                            value="light"
                            onClick={handleChangeThem}
                            style={{
                                backgroundColor: !themeIsDark
                                    ? "white"
                                    : "#1e2022",
                            }}
                        >
                            ☀️
                        </Radio.Button>
                    </Radio.Group>
                </div>

                <div className="mb-10">
                    <span className="block mb-2">Язык интерфейса:</span>
                    <Select
                        value={language}
                        onChange={handleChangeLanguage}
                        className="w-full text-white"
                    >
                        <Option value="Русский">Русский</Option>
                        <Option value="English">English</Option>
                    </Select>
                </div>
                <div>
                    <Title level={3}>Companies</Title>
                    <Menu
                        style={{ width: 256 }}
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        mode={mode}
                        theme={theme}
                        items={items}
                    />
                </div>
            </Card>
        </div>
    );
};

export default SettingsCard;
