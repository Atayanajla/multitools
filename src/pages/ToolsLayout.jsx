import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const ToolsLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Header className="backdrop-blur-md bg-white/60 sticky top-0 z-20" />
      <Outlet />
    </div>
  );
};

export default ToolsLayout;
