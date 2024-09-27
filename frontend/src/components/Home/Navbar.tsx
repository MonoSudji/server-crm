import NavigationActions from "../Navigation/NavigationActions";
import NavigationList from "../Navigation/NavigationList";

const Navbar = () => {
  return (
    <nav className="h-[50px] border-b-2 border-slate-700 flex items-center px-4 justify-between">
      <NavigationList />
      <NavigationActions />
    </nav>
  );
};

export default Navbar;
