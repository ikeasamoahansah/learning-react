import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";
import App from "../App";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;