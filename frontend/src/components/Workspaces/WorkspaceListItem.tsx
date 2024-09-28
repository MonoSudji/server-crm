import { FC, useCallback } from "react";
import DeskListItem from "../Desks/DeskListItem";
import { RoutesNames } from "../../utils/routes-names";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";

interface IWorkspaceListItem {
  id: number;
  onOpenModal: () => void;
}

const WorkspaceListItem: FC<IWorkspaceListItem> = ({ id, onOpenModal }) => {
  const navigate = useNavigate();
  const boardData = [
    {
      id: 1,
      description: "Разработка клиентской части хакатона",
      name: "Разработка клиентской части",
      project_id: 1,
    },
    {
      id: 2,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 1,
    },
    {
      id: 3,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 3,
    },
    {
      id: 2,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 1,
    },
    {
      id: 3,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 3,
    },
    {
      id: 2,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 1,
    },
    {
      id: 3,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 3,
    },
    {
      id: 2,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 1,
    },
    {
      id: 3,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 3,
    },
    {
      id: 2,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 1,
    },
    {
      id: 3,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 3,
    },
    {
      id: 2,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 1,
    },
    {
      id: 3,
      description: "Разработка клиентской части",
      name: "Разработка swswwsswwsswsw части",
      project_id: 3,
    },
  ];

  const handleWatchBoard = useCallback((id: number) => {
    navigate(`${RoutesNames.PROJECT}/${id}`);
  }, []);

  return (
    <div className="flex gap-4 w-full flex-wrap">
      {boardData
        .filter((el) => el.project_id === id)
        .map((el) => (
          <div className="flex gap-3 flex-wrap">
            <DeskListItem onClick={() => handleWatchBoard(el.id)} />
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
