import { FC, useCallback } from "react";
import DeskListItem from "../Desks/DeskListItem";
import { RoutesNames } from "../../utils/routes-names";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useAppSelector } from "../../hooks/useAppSelector";

interface IWorkspaceListItem {
  id: number;
  onOpenModal: () => void;
}

const WorkspaceListItem: FC<IWorkspaceListItem> = ({ id, onOpenModal }) => {
  const navigate = useNavigate();
  const { boards } = useAppSelector((state) => state.boards);

  const handleWatchBoard = useCallback((id: number) => {
    navigate(`${RoutesNames.PROJECT}/${id}`);
  }, []);

  return (
    <div className="flex gap-4 w-full flex-wrap">
      {boards
        .filter((el) => el.project_id === id)
        .map((el) => (
          <div className="flex gap-3 flex-wrap">
            <DeskListItem
              name={el.name}
              onClick={() => handleWatchBoard(el.id!)}
            />
          </div>
        ))}
      <div
        className="border border-white w-44 h-24 rounded-lg"
        onClick={onOpenModal}
      >
        <PlusCircleOutlined className="text-white cursor-pointer text-3xl justify-center w-full items-center h-full" />
      </div>
    </div>
  );
};

export default WorkspaceListItem;
