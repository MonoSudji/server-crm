import { createBrowserRouter } from "react-router-dom";
import { RoutesNames } from "../utils/routes-names";
import ReigstrationPage from "../pages/ReigstrationPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import BoardPage from "../pages/BoardPage";

export const router = createBrowserRouter([
  {
    path: RoutesNames.HOME,
    element: <HomePage />,
  },
  {
    path: RoutesNames.LOGIN,
    element: <LoginPage />,
  },
  {
    path: RoutesNames.REGISTRATION,
    element: <ReigstrationPage />,
  },
  {
    path: RoutesNames.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: RoutesNames.MY_TASK,
    element: <div>my-task</div>,
  },
  {
    path: `${RoutesNames.PROJECT}`,
    element: <HomePage />,
  },
  {
    path: `${RoutesNames.PROJECT}/:id`,
    element: <BoardPage />,
  },
]);
