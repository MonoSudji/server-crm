import DeskList from "../Desks/DeskList";
import WorkspaceControls from "./WorkspaceControls";

const WorkspaceListItem = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <WorkspaceControls />
      <DeskList type="non-recent" />
    </div>
  );
};

export default WorkspaceListItem;
