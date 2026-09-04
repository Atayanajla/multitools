import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import ToolsLayout from "./pages/ToolsLayout";
import MathFis from "./pages/mathfis/MathFis";
import Note from "./pages/note/Note";
import Stopwatch from "./pages/stopwatch/Stopwatch";
import Timer from "./pages/timer/Timer";
import TodoList from "./pages/todolist/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/tools",
    element: <ToolsLayout />,
    children: [
      {
        path: "mathfis",
        element: <MathFis />,
      },
      {
        path: "note",
        element: <Note />,
      },
      {
        path: "stopwatch",
        element: <Stopwatch />,
      },
      {
        path: "timer",
        element: <Timer />,
      },
      {
        path: "todolist",
        element: <TodoList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
