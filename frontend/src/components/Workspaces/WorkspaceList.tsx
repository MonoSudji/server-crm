import { FC } from "react";
import WorkspaceControls from "./WorkspaceControls";
import WorkspaceListItem from "./WorkspaceListItem";
import { useAppSelector } from "../../hooks/useAppSelector";

interface IWorkSpaceList {
  onOpenModal: (projectId: number) => void;
}

const WorkspaceList: FC<IWorkSpaceList> = ({ onOpenModal }) => {
  const { project } = useAppSelector((state) => state.project);

  return (
    <div className="flex flex-col gap-12 w-full">
      {project.map((ss) => (
        <div className="flex flex-col gap-6">
          <WorkspaceControls name={ss.name} />
          <WorkspaceListItem
            id={ss.id!}
            onOpenModal={() => onOpenModal(ss.id!)}
          />
        </div>
      ))}
    </div>
  );
};

export default WorkspaceList;
