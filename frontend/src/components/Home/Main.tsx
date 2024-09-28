import MainDesks from "../Desks/MainDesks";
import RecentDesks from "../Desks/RecentDesks";

const Main = () => {
  return (
    <main className="w-full max-w-[855px] flex flex-col gap-10 items-center py-4 px-4 overflow-y-scroll">
      <RecentDesks />
      <MainDesks />
    </main>
  );
};

export default Main;
