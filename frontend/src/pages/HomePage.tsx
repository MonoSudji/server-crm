import Main from "../components/Home/Main";
import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="flex">
        <Sidebar />
        <Main />
      </section>
    </div>
  );
};

export default HomePage;
