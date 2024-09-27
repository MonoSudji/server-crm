import {
  AppstoreAddOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const WorkspaceControls = () => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 bg-blue-400 rounded-sm"></div>
        <p className="text-white">ByteSpace</p>
      </div>

      <div className="flex gap-4">
        <button className="px-2 rounded-sm text-white flex gap-2 items-center bg-[#A1BDD914] text-sm">
          <AppstoreAddOutlined />
          <span>Доски</span>
        </button>
        <button className="px-2 rounded-sm text-white flex gap-2 items-center bg-[#A1BDD914] text-sm">
          <TeamOutlined />
          <span>Участники</span>
        </button>
        <button className="px-2 rounded-sm text-white flex gap-2 items-center bg-[#A1BDD914] text-sm">
          <SettingOutlined />
          <span>Настройки</span>
        </button>
      </div>
    </div>
  );
};

export default WorkspaceControls;
