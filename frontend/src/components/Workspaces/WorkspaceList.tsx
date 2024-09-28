import { FC } from "react";
import WorkspaceControls from "./WorkspaceControls";
import WorkspaceListItem from "./WorkspaceListItem";

interface IWorkSpaceList {
  onOpenModal: () => void;
}

const WorkspaceList: FC<IWorkSpaceList> = ({ onOpenModal }) => {
  const projectData = [
    {
      id: 1,
      name: "Byte Space",
      description: "Реализация системы управления проектами для Хакатона",
      priority: 5,
      user_id: null,
    },
    {
      id: 2,
      name: "Девелоника",
      description: "Реализация системы управления проектами для Хакатона",
      priority: 5,
      user_id: null,
    },
    {
      id: 3,
      name: "Яндекс",
      description: "Реализация системы управления проектами для Хакатона",
      priority: 5,
      user_id: null,
    },
  ];

  return (
    <div className="flex flex-col gap-12 w-full">
      {projectData.map((ss) => (
        <>
          <WorkspaceControls name={ss.name} />
          <WorkspaceListItem id={ss.id} onOpenModal={onOpenModal} />
        </>
      ))}
    </div>
  );
};

export default WorkspaceList;
