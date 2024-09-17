import { createBrowserRouter } from "react-router-dom";
import { Error, Home } from "pages";
import { Layout } from "components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);