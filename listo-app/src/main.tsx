import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Trash from "./pages/Trash";
import "./main.css";
import NotFound from "./pages/NotFound";
import ListTest from "./pages/Listes_Test";
import SelectedListPage from "./pages/SelectedListPage";
import { ListsProvider } from "./context/ListsProvider";
import { MenuProvider } from "./context/MenuContext";
import { ModalProvider } from "./context/ModalContext";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
        <ListsProvider>
          <ModalProvider>
          <Layout />
          </ModalProvider>
        </ListsProvider>
     
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <MenuProvider>
            <ListTest />
          </MenuProvider>
        ),
      },
      {
        path: "/trash",
        element: <Trash />,
      },
      {
        path: "/lists/:listId",
        element: <SelectedListPage />,
      },
    ],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
