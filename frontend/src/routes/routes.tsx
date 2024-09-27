import { createBrowserRouter } from "react-router-dom";
import { RoutesNames } from "../utils/routes-names"
import ReigstrationPage from "../pages/ReigstrationPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: RoutesNames.HOME,
    element: <div>homepage</div>,
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
    path: RoutesNames.PROJECT,
    element: <div>project</div>,
    children: [
      {
        path: `${RoutesNames.PROJECT}/:id`,
        element: <div>project</div>,
      },
    ],
  },
]);
