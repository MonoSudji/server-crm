import MainDesks from "../Desks/MainDesks";
import RecentDesks from "../Desks/RecentDesks";

const Main = () => {
  return (
    <main className="w-[80%] flex flex-col gap-10 items-center py-4 px-28 overflow-scroll">
      <RecentDesks />
      <MainDesks />
    </main>
  );
};

export default Main;
