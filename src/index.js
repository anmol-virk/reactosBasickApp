import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Players from "./pages/Players";
import Report from "./pages/Report";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PlayerDetails from "./pages/playerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/players",
    element: <Players />,
  },
  {
    path: "/players/:playerId",
    element: <PlayerDetails />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
