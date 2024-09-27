import { Button, Card, Input, Radio, Select, theme, Upload,} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { setTheme } from "../../store/settings/settingsSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setPanelTransparency } from "../../store/settings/settingsSlice";
import { setLanguage } from "../../store/settings/settingsSlice";
const { Option } = Select;

const SettingsCard = () => {
    const panelTransparency = useAppSelector((state) => state.settings.panelTransparency);
    const language = useAppSelector((state) => state.settings.language);
    
    // настройки темы
    const { token } = theme.useToken();
    const dispatch = useAppDispatch();

    // handlers
    const handleChangeThem = () => dispatch(setTheme());

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
                        <Radio.Button value="dark" className="text-white" onClick={handleChangeThem}>
                            🌙
                        </Radio.Button>
                        <Radio.Button value="light" className="bg-gray-200" onClick={handleChangeThem}>
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
                        <Button type="primary">Загрузить свой фон</Button>
                        <Input.Search
                            placeholder="Поиск среди миллиона картинок"
                            enterButton="Найти"
                            className="text-white mt-3"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <Upload>
                        <Button icon={<UploadOutlined />}>
                            Загрузить изображение
                        </Button>
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

export default SettingsCard;