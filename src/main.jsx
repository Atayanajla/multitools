import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import ToolsLayout from "./pages/ToolsLayout";
import BMI from "./pages/bmi/BMI";
import Basic from "./pages/kalkubasic/Basic";
import Note from "./pages/note/Note";
import Stopwatch from "./pages/stopwatch/Stopwatch";
import Suhu from "./pages/suhu/Suhu";
import Tanggal from "./pages/tanggal/Tanggal";
import Timer from "./pages/timer/Timer";
import TodoList from "./pages/todolist/TodoList";
import Usia from "./pages/usia/Usia";


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
        path: "bmi",
        element: <BMI />,
      },
      {
        path: "basic",
        element: <Basic />,
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
        path: "suhu",
        element: <Suhu />,
      },
      {
        path: "tanggal",
        element: <Tanggal />,
      },
      {
        path: "timer",
        element: <Timer />,
      },
      {
        path: "todolist",
        element: <TodoList />,
      },
      {
        path: "usia",
        element: <Usia />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
