import { AppstoreAddOutlined, HomeOutlined } from "@ant-design/icons";
import { Divider, Menu } from "antd";

const Sidebar = () => {
  return (
    <div className="w-[15%] min-h-screen">
      <Menu
        defaultSelectedKeys={["1"]}
        style={{
          height: "100%",
          borderRight: 0,
          padding: "12px",
          backgroundColor: "#222",
        }}
      >
        <Menu.Item key="1" style={{ display: "flex", gap: "12px" }}>
          <AppstoreAddOutlined /> <span>Доски</span>
        </Menu.Item>
        <Menu.Item key="2">
          <HomeOutlined /> <span>Главная страница </span>
        </Menu.Item>

        <Divider />
        <p className="text-center text-slate-500 mb-5">Рабочие пространства</p>
        <Menu.Item key="3">Личное пространство</Menu.Item>
        <Menu.Item key="4">Рандом пространство</Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
