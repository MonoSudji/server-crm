import { useParams } from "react-router-dom";
import Sidebar from "../components/Home/Sidebar";
import Navbar from "../components/Home/Navbar";
import { useEffect } from "react";
import axios from "axios";

const BoardPage = () => {
  const { id } = useParams();

  const getBoardById = async () => {
    const { data } = await axios.get(`http://localhost:8080/api/board/${id}`);
    console.log(data);
  };

  useEffect(() => {
    getBoardById();
  }, []);

  return (
    <div className="text-white">
      <Navbar />
      <section className="flex">
        <Sidebar />
        <div className="w-full">
          <div className="border border-white w-full h-16">dwdwdw</div>
        </div>
      </section>
    </div>
  );
};

export default BoardPage;
