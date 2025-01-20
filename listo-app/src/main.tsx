import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componants/Layout";
import HomePage from "./pages/HomePage";
import Trash from "./pages/Trash";
import List from "./componants/List/List";
import "./main.css";
import NotFound from "./pages/NotFound";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/trash",
        element: <Trash />,
      },
      {
        path: "/lists/:listId",
        element: <List />,
      },
    ],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
