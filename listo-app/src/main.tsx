import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Trash from "./pages/Trash";
import "./main.css";
import NotFound from "./pages/NotFound";
import ListsPage from "./pages/ListsPage";
import SelectedListPage from "./components/features/list2/SelectedListPage"
import { ListsProvider } from "./context/ListsProvider";


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <ListsProvider>
      <Layout />
    </ListsProvider>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <ListsPage />
        )
      },
      {
        path: "/trash",
        element: <Trash />,
      },
      {
        path: "/lists/:listId",
       element: 
        <SelectedListPage />,
      },
    ],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
