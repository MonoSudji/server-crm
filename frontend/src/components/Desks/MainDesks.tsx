import { Button, Input, Modal, Select } from "antd";
import WorkspaceList from "../Workspaces/WorkspaceList";
import { useState } from "react";
import { Option } from "antd/es/mentions";

const MainDesks = () => {
  const [isVisibleModalAddBoard, setIsVisibleModalAddBoard] = useState(false);

  const handleIsVisibleModal = () => {
    setIsVisibleModalAddBoard((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="uppercase text-lg text-slate-400 font-semibold mb-4">
        Ваши рабочие пространства
      </h2>
      <WorkspaceList onOpenModal={handleIsVisibleModal} />
      <Modal
        open={isVisibleModalAddBoard}
        onCancel={handleIsVisibleModal}
        footer={null}
      >
        <div className="flex justify-center flex-col items-center space-y-3">
          <h1 className="text-xl">Создайте доску для вашего проекта!</h1>
          <div className="relative text-white cursor-pointer w-44 h-24 bg-indigo-600  p-1 rounded-md">
            <span className="absolute right-2">Доска</span>
            <img src="" alt="" />
          </div>
          <Input placeholder={"Укажите название доски"} />
          <Input placeholder={"Укажите описание доски"} />
          <Select defaultValue={"Выберите фон"} className="w-full">
            <Option value="Red" />
            <Option value="Blue" />
            <Option value="Orange" />
          </Select>
          <div className="flex space-x-2">
            <Button>Создать</Button>
            <Button>Создать</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainDesks;
