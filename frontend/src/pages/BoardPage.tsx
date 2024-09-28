import { useParams } from "react-router-dom";
import Sidebar from "../components/Home/Sidebar";
import Navbar from "../components/Home/Navbar";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { boardAction } from "../store/reducers/board/boardSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const BoardPage = () => {
  const { id } = useParams();
  const { board } = useAppSelector((state) => state.boards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(boardAction.getBoardById(Number(id)));
    }
  }, []);

  return (
    <div className="text-white">
      <Navbar />
      <section className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="border border-white w-full h-16">{board.name}</div>
        </div>
      </section>
    </div>
  );
};

export default BoardPage;
