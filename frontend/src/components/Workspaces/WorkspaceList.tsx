import WorkspaceListItem from "./WorkspaceListItem";

const WorkspaceList = () => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <WorkspaceListItem />
      <WorkspaceListItem />
      <WorkspaceListItem />
      <WorkspaceListItem />
    </div>
  );
};

export default WorkspaceList;
