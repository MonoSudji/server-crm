import WorkspaceList from "../Workspaces/WorkspaceList";

const MainDesks = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <h2 className="uppercase text-lg text-slate-400 font-semibold mb-2">
        Ваши рабочие пространства
      </h2>
      <WorkspaceList />
    </div>
  );
};

export default MainDesks;
