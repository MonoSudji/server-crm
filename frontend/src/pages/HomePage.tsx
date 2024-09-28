import Main from "../components/Home/Main";
import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="flex mt-6">
        <div className="flex justify-center max-w-1160 mx-auto px-3">
          <Sidebar />
          <Main />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
