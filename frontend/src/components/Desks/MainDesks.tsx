import { Button, Input, Modal, Select } from "antd";
import WorkspaceList from "../Workspaces/WorkspaceList";
import { useState } from "react";
import { Option } from "antd/es/mentions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { boardAction } from "../../store/reducers/board/boardSlice";

const MainDesks = () => {
  const [isVisibleModalAddBoard, setIsVisibleModalAddBoard] = useState(false);

  const dispatch = useAppDispatch();

  const [requestValue, setRequestValue] = useState<{
    name: string;
    description: string;
    project_id: null | string;
  }>({
    name: "",
    description: "",
    project_id: null,
  });

  const handleIsVisibleModal = (projectId: number) => {
    setIsVisibleModalAddBoard((prevState) => !prevState);
    setRequestValue((prevState) => ({
      ...prevState,
      project_id: `${projectId}`,
    }));
  };

  const handleClose = () => {
    setIsVisibleModalAddBoard(false);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequestValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAsyncCreateBoard = () => {
    dispatch(
      boardAction.createBoard({
        ...requestValue,
        project_id: Number(requestValue.project_id),
      })
    );
    setRequestValue({ description: "", project_id: null, name: "" });
    handleClose();
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="uppercase text-lg text-slate-400 font-semibold mb-4">
        Ваши рабочие пространства
      </h2>
      <WorkspaceList onOpenModal={handleIsVisibleModal} />
      <Modal open={isVisibleModalAddBoard} onCancel={handleClose} footer={null}>
        <div className="flex justify-center flex-col items-center space-y-3">
          <h1 className="text-xl">Создайте доску для вашего проекта!</h1>
          <div className="relative text-white cursor-pointer w-44 h-24 bg-indigo-600  p-1 rounded-md">
            <span className="absolute right-2">Доска</span>
            <img src="" alt="" />
          </div>
          <Input
            placeholder={"Укажите название доски"}
            value={requestValue.name}
            name={"name"}
            onChange={handleChangeValue}
          />
          <Input
            placeholder={"Укажите описание доски"}
            value={requestValue.description}
            name={"description"}
            onChange={handleChangeValue}
          />
          <Select defaultValue={"Выберите фон"} className="w-full">
            <Option value="Red" />
            <Option value="Blue" />
            <Option value="Orange" />
          </Select>
          <div className="flex space-x-2">
            <Button onClick={handleAsyncCreateBoard}>Создать</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainDesks;
